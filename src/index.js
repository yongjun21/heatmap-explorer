import SgHeatmap from 'sg-heatmap'
import supportLeaflet from 'sg-heatmap/dist/es/plugins/leaflet'
import {YlOrRd, optimizePointSpread} from 'sg-heatmap/dist/es/helpers/color'

import numeral from 'numeral'
import themes from './themes'

// import {googleMapsStyles} from './constants'

const $map = document.querySelector('.map-container')

const map = L.map($map, {
  center: [1.352083, 103.819836],
  zoom: 12,
  minZoom: 12,
  maxZoom: 17,
  maxBounds: [[1.16, 103.582], [1.48073, 104.1647]],
  maxBoundsViscosity: 1.0
})

L.tileLayer('https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png', {
  detectRetina: true,
  attribution: 'Map data © contributors, <a href="http://SLA.gov.sg">Singapore Land Authority</a>'
}).addTo(map)

map.attributionControl
  .setPrefix('<img src="https://docs.onemap.sg/maps/images/oneMap64-01.png" style="height:20px;width:20px;"/>')

// const map = new google.maps.Map($map, {
//   center: new google.maps.LatLng(1.352083, 103.819836),
//   zoom: 11,
//   minZoom: 11,
//   maxZoom: 16,
//   styles: googleMapsStyles.blueWater
// })

const store = {
  source: null,
  control: null,
  accessor: null,
  heatmap: null,
  cache: {},
  load (key) {
    if (key in this.cache) {
      if (this.heatmap && !(this.heatmap instanceof Promise)) {
        this.heatmap.renderer.removeFrom(map)
      }
      if (this.cache[key] instanceof Promise) return this.cache[key]
      this.source = key
      this.heatmap = this.cache[key]
      this.heatmap.renderer.addTo(map)
      return this.heatmap
    } else {
      this.cache[key] = window.fetch(`./data/${key}.json`)
        .then(res => res.json())
        .then(data => new SgHeatmap(data))
        .then(heatmap => {
          supportLeaflet(heatmap)
          modifyGetStat(heatmap)
          const colorScale = YlOrRd()
          heatmap.initializeRenderer(colorScale, {
            weight: 1,
            color: 'black',
            opacity: 1,
            fillColor: 'white',
            fillOpacity: 0.3
          }, {fillOpacity: 0.7})
          heatmap.renderer.bindTooltip(layer => {
            const area = layer.feature.properties.Subzone_Name ||
                         layer.feature.properties.Planning_Area_Name
            const value = layer.feature.properties._value
            const content = [area]
            if (value) content.push(value)
            return content.join(' ')
          })
          this.source = key
          this.heatmap = heatmap
          this.heatmap.renderer.addTo(map)
          this.cache[key] = heatmap
          return heatmap

          function modifyGetStat (heatmap) {
            const _getStat = heatmap.getStat
            heatmap.getStat = function () {
              const stat = _getStat.apply(heatmap, arguments)
              Object.keys(stat.values).forEach(key => {
                if (!stat.values[key]) {
                  stat.unchanged.push(key)
                  delete stat.values[key]
                }
              })
              stat.min = Math.min(...Object.values(stat.values))
              return stat
            }
          }
        })
      return this.cache[key]
    }
  }
}

window.store = store

onChange(3, 0, 0, 5)

function onChange (selectedTheme, selectedYear, start, end) {
  const theme = themes[selectedTheme]
  const year = theme.years[selectedYear]
  const source = theme.sources[theme.mapping[year].source]
  const control = theme.controls[theme.mapping[year].control]

  if (store.source === source) {
    if (store.control === control) {
      render(store.accessor(start, end), theme.format)
    } else {
      store.control = control
      store.accessor = generateAccessor(control, year)
      // render control
      render(store.accessor(start, end), theme.format)
    }
    return
  }

  const heatmap = store.load(source)

  if (heatmap instanceof Promise) {
    heatmap.then(() => onChange(selectedTheme, selectedYear, start, end))
  } else {
    onChange(selectedTheme, selectedYear, start, end)
  }
}

function generateAccessor (control, year) {
  const accessors = control.items.map(item => {
    return d => {
      return item.keys.reduce((sum, path) => {
        return sum + get(d[year], path)
      }, 0)
    }
  })

  const norm = control.normalize ? d => get(d[year], control.normalize) || 1 : d => 1

  switch (control.type) {
    case 'radio':
      return selected => {
        return d => accessors[selected](d) / norm(d)
      }

    case 'checkbox':
      return selected => {
        return d => selected.reduce((sum, index) => {
          return sum + accessors[index](d)
        }, 0) / norm(d)
      }

    case 'range':
      return (start, end) => {
        return d => accessors.reduce((sum, accessor, index) => {
          if (index < start || index >= end) return sum
          return sum + accessor(d)
        }, 0) / norm(d)
      }
  }
}

function render (accessor, format) {
  const stat = store.heatmap.getStat(accessor)
  store.heatmap.renderer.eachLayer(layer => {
    if (layer.feature.id in stat.values) {
      const formatted = numeral(stat.values[layer.feature.id]).format(format || '0')
      layer.feature.properties._value = formatted
    }
  })
  store.heatmap.render(accessor, optimizePointSpread(stat))
}

function get (d, path) {
  let value = d
  path.split('.').forEach(key => {
    value = value[key]
  })
  return value
}
