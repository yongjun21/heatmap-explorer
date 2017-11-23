import SgHeatmap from 'sg-heatmap'
import supportLeaflet from 'sg-heatmap/dist/es/plugins/leaflet'
import {YlOrRd, optimizePointSpread} from 'sg-heatmap/dist/es/helpers/color'

import numeral from 'numeral'

export default {
  map: null,
  cache: {},
  add () {
    const layerId = Symbol()
    this[layerId] = {source: null, heatmap: null}
    return layerId
  },
  load (key, layer) {
    if (key in this.cache) {
      if (this.cache[key] instanceof Promise) return this.cache[key]
      if (this[layer].heatmap) {
        this[layer].heatmap.renderer.removeFrom(this.map)
      }
      this[layer].source = key
      this[layer].heatmap = this.cache[key]
      // tag ownership so that only the correct owner can unmount heatmap layer
      this[layer].heatmap._owner = layer
      this[layer].heatmap.renderer.addTo(this.map)
      return this[layer].heatmap
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
  unload (layer) {
    if (this[layer].heatmap._owner === layer) {
      // can unmount only if mounted by self
      this[layer].heatmap.renderer.removeFrom(this.map)
    }
    this[layer].source = null
    this[layer].heatmap = null
  },
  render (layer, accessor, format) {
    const stat = this[layer].heatmap.getStat(accessor)
    this[layer].heatmap.renderer.eachLayer(layer => {
      if (layer.feature.id in stat.values) {
        const formatted = numeral(stat.values[layer.feature.id]).format(format || '0')
        layer.feature.properties._value = formatted
      } else {
        delete layer.feature.properties._value
      }
    })
    this[layer].heatmap.render(accessor, optimizePointSpread(stat))
  }
}
