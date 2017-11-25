import SgHeatmap from 'sg-heatmap'
import supportLeaflet from 'sg-heatmap/dist/es/plugins/leaflet'
import {optimizePointSpread} from 'sg-heatmap/dist/es/helpers/color'

import numeral from 'numeral'

export default {
  map: null,
  cache: {},
  add () {
    const layerId = Symbol()
    this[layerId] = {source: null, heatmap: null}
    return layerId
  },
  load (layer, key, colorScale, style) {
    if (key in this.cache) {
      if (this.cache[key] instanceof Promise) return this.cache[key]

      if (this[layer].heatmap) {
        this[layer].heatmap.renderer.removeFrom(this.map)
      }

      const heatmap = this.cache[key].clone(true)
      supportLeaflet(heatmap)
      modifyGetStat(heatmap)
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

      this[layer].source = key
      this[layer].heatmap = heatmap
      heatmap.renderer.addTo(this.map)
      heatmap.renderer.bringToBack()
      return heatmap
    } else {
      this.cache[key] = window.fetch(`./data/${key}.json`)
        .then(res => res.json())
        .then(data => new SgHeatmap(data))
        .then(heatmap => {
          this.cache[key] = heatmap
          return heatmap
        })
      return this.cache[key]
    }
  },
  unload (layer) {
    if (!this[layer].heatmap) return
    this[layer].heatmap.renderer.removeFrom(this.map)
    this[layer].source = null
    this[layer].heatmap = null
  },
  render (layer, accessor, format) {
    if (!this[layer].heatmap) return
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
  },
  adjust (layer, style) {
    if (!this[layer].heatmap) return
    this[layer].heatmap.renderer.setStyle(feature => style)
  },
  reorder (layer) {
    if (!this[layer].heatmap) return
    this[layer].heatmap.renderer.bringToFront()
  }
}

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
