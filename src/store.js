import SgHeatmap from 'sg-heatmap'
import supportMapboxGL from 'sg-heatmap/dist/es/plugins/mapboxgl'
import {optimizePointSpread} from 'sg-heatmap/dist/es/helpers/color'

import numeral from 'numeral'

export default {
  map: null,
  cache: {},
  topLayer: null,
  add () {
    const layerId = Symbol()
    this[layerId] = {source: null, heatmap: null}
    return layerId
  },
  load (layer, key, colorScale, style) {
    if (key in this.cache) {
      if (this.cache[key] instanceof Promise) return this.cache[key]

      if (this[layer].heatmap) {
        this[layer].heatmap.renderer.remove()
      }

      const heatmap = this.cache[key].clone(true)
      supportMapboxGL(heatmap)
      modifyGetStat(heatmap)

      return this.canLoad.then(() => {
        heatmap.initializeRenderer(this.map, colorScale, {
          'line-width': 1,
          'line-color': 'black',
          'line-opacity': 0,
          'fill-color': colorScale(0),
          'fill-opacity': 0
        }, {
          'line-width': 2
        })

        this[layer].source = key
        this[layer].heatmap = heatmap
        return heatmap
      })
    } else {
      this.cache[key] = window.fetch(`./data/${key}.json`)
        .then(res => res.json())
        .then(data => new SgHeatmap(data))
        .then(heatmap => {
          this.cache[key] = heatmap
        })
      return this.cache[key]
    }
  },
  unload (layer) {
    if (!this[layer].heatmap) return
    this[layer].heatmap.renderer.remove()
    this[layer].source = null
    this[layer].heatmap = null
  },
  render (layer, accessor, format) {
    if (!this[layer].heatmap) return
    const stat = this[layer].heatmap.getStat(accessor)
    this[layer].heatmap.children.forEach(c => {
      if (c.id in stat.values) {
        const formatted = numeral(stat.values[c.id]).format(format || '0')
        c.properties._value = formatted
      } else {
        delete c.properties._value
      }
    })
    this[layer].heatmap.render(accessor, optimizePointSpread(stat))
  },
  adjust (layer, style) {
    if (!this[layer].heatmap) return
    Object.keys(style).forEach(key => {
      const [subLayer, prop] = key.split('.')
      const layerId = this[layer].heatmap.renderer.layer + '-' + subLayer
      if (this.map.getLayer(layerId)) this.map.setPaintProperty(layerId, prop, style[key])
    })
  },
  reorder (layer) {
    if (layer) this.topLayer = layer
    if (!this[this.topLayer].heatmap) return
    this[this.topLayer].heatmap.renderer.layers.forEach(layerId => {
      if (this.map.getLayer(layerId)) this.map.moveLayer(layerId)
    })
  },
  canLoad: Promise.resolve()
}

function modifyGetStat (heatmap) {
  const _getStat = heatmap.getStat
  heatmap.getStat = function () {
    const stat = _getStat.apply(heatmap, arguments)
    Object.keys(stat.values).forEach(key => {
      if (stat.values[key] == null || isNaN(stat.values[key])) {
        stat.unchanged.push(key)
        delete stat.values[key]
      }
    })
    stat.min = Math.min(...Object.values(stat.values))
    stat.max = Math.max(...Object.values(stat.values))
    if (stat.max === stat.min) stat.max = stat.min + 1
    return stat
  }
}
