import SgHeatmap from 'sg-heatmap'
import {YlOrRd} from 'sg-heatmap/dist/es/helpers/color'

import themes from './themes'
import {googleMapsStyles} from './constants'

const $map = document.querySelector('.map-container')

const map = new google.maps.Map($map, {
  center: new google.maps.LatLng(1.352083, 103.819836),
  zoom: 11,
  minZoom: 11,
  maxZoom: 16,
  styles: googleMapsStyles.blueWater
})

const store = {
  source: null,
  control: null,
  accessor: null,
  heatmap: null,
  cache: {},
  load (key) {
    if (key in this.cache) {
      if (this.heatmap && !(this.heatmap instanceof Promise)) {
        this.heatmap.renderer.setMap(null)
      }
      if (this.cache[key] instanceof Promise) return this.cache[key]
      this.source = key
      this.heatmap = this.cache[key]
      this.heatmap.renderer.setMap(map)
      return this.heatmap
    } else {
      this.cache[key] = window.fetch(`./data/${key}.json`)
        .then(res => res.json())
        .then(data => new SgHeatmap(data))
        .then(heatmap => {
          const colorScale = YlOrRd(3)
          heatmap.initializeRenderer(colorScale, {
            strokeWeight: 1,
            strokeColor: 'black',
            strokeOpacity: 0.3,
            fillColor: 'white',
            fillOpacity: 1
          })
          this.source = key
          this.heatmap = heatmap
          this.heatmap.renderer.setMap(map)
          this.cache[key] = heatmap
          return heatmap
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
      render(store.accessor(start, end))
    } else {
      store.control = control
      store.accessor = generateAccessor(control, year)
      // render control
      render(store.accessor(start, end))
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
          if (index < start || index > end) return sum
          return sum + accessor(d)
        }, 0) / norm(d)
      }
  }
}

function render (accessor) {
  const {values} = store.heatmap.getStat(accessor)
  store.heatmap.render(accessor)
}

function get (d, path) {
  let value = d
  path.split('.').forEach(key => {
    value = value[key]
  })
  return value
}
