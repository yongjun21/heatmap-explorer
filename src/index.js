import SgHeatmap from 'sg-heatmap'
import supportLeaflet from 'sg-heatmap/dist/es/plugins/leaflet'
import {YlOrRd, optimizePointSpread} from 'sg-heatmap/dist/es/helpers/color'

import numeral from 'numeral'
import themes from './themes'

let map

const store = {
  source: null,
  heatmap: null,
  cache: {},
  load (key) {
    if (key in this.cache) {
      if (this.cache[key] instanceof Promise) return this.cache[key]
      if (this.heatmap) this.heatmap.renderer.removeFrom(map)
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
            opacity: 0.3,
            fillColor: 'white',
            fillOpacity: 0.3
          }, {
            weight: 2,
            fillOpacity: 0.7,
            opacity: 1
          })
          heatmap.renderer.bindTooltip(layer => {
            const content = [
              layer.feature.properties.Planning_Area_Name,
              layer.feature.properties.Subzone_Name,
              layer.feature.properties._value
            ]
            const $content = document.createElement('div')
            content.filter(item => item).forEach(item => {
              const $p = document.createElement('p')
              $p.textContent = item
              $content.appendChild($p)
            })
            return $content
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
                if (stat.values[key] == null) {
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
  },
  render (accessor, format) {
    const stat = this.heatmap.getStat(accessor)
    this.heatmap.renderer.eachLayer(layer => {
      if (layer.feature.id in stat.values) {
        const formatted = numeral(stat.values[layer.feature.id]).format(format || '0')
        layer.feature.properties._value = formatted
      }
    })
    this.heatmap.render(accessor, optimizePointSpread(stat))
  }
}

window.vm = new Vue({
  el: '#app',
  data: {
    themes: themes,
    selectedTheme: 5,
    selectedYear: 0,
    selectedItem: 0,
    selectedItem2: 5
  },
  computed: {
    theme () {
      return this.themes[this.selectedTheme]
    },
    year () {
      return this.theme.years[this.selectedYear]
    },
    source () {
      return this.theme.sources[this.theme.mapping[this.year].source]
    },
    control () {
      return this.theme.controls[this.theme.mapping[this.year].control]
    },
    accessor () {
      const {control, year} = this
      const accessors = control.items.map(item => {
        return d => {
          return item.keys.reduce((sum, path) => {
            return sum + get(d[year], path)
          }, 0)
        }
      })

      const threshold = control.threshold || 0
      const norm = control.normalize ? d => get(d[year], control.normalize) : d => 1

      switch (control.type) {
        case 'radio':
          return selected => {
            return d => {
              const nom = accessors[selected](d)
              const denom = norm(d)
              if ((control.normalize ? denom : nom) < threshold) return null
              return nom / denom
            }
          }

        case 'checkbox':
          return selected => {
            return d => {
              const nom = selected.reduce((sum, index) => {
                return sum + accessors[index](d)
              }, 0)
              const denom = norm(d)
              if ((control.normalize ? denom : nom) < threshold) return null
              return nom / denom
            }
          }

        case 'range':
          return (start, end) => {
            return d => {
              const nom = accessors.reduce((sum, accessor, index) => {
                if (index < start || index >= end) return sum
                return sum + accessor(d)
              }, 0)
              const denom = norm(d)
              if ((control.normalize ? denom : nom) < threshold) return null
              return nom / denom
            }
          }
      }
    }
  },
  methods: {
    onChange () {
      if (store.source === this.source) {
        store.render(this.accessor(this.selectedItem, this.selectedItem2), this.theme.format)
      }

      const heatmap = store.load(this.source)
      if (heatmap instanceof Promise) {
        heatmap.then(() => this.onChange())
      } else {
        store.render(this.accessor(this.selectedItem, this.selectedItem2), this.theme.format)
      }
    }
  },
  mounted () {
    map = L.map(this.$refs.map, {
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

    this.onChange()
  },
  watch: {
    accessor: 'onChange',
    selectedItem: 'onChange',
    selectedItem2: 'onChange'
  }
})

function get (d, path) {
  let value = d
  path.split('.').forEach(key => {
    value = value[key]
  })
  return value
}
