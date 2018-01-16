import SgHeatmap from 'sg-heatmap'
import supportMapboxGL from 'sg-heatmap/src/plugins/mapboxgl'
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
        this[layer].heatmap.renderer.remove()
      }

      const heatmap = this.cache[key].clone(true)
      supportMapboxGL(heatmap)
      modifyGetStat(heatmap)

      return this.canLoad.then(() => {
        heatmap.initializeRenderer(this.map, colorScale, {
          'fill-outline-color': 'black',
          'fill-color': colorScale(0),
          'fill-opacity': 0.3
        }, {
          'fill-opacity': 0.7
        })

        // const tooltip = new mapboxgl.Popup({
        //   closeButton: false,
        //   closeOnClick: false
        // })
        //
        // this.map.on('mouseenter', heatmap.renderer.layer, e => {
        //   const feature = e.features[0]
        //   const content = [
        //     feature.properties.Planning_Area_Name,
        //     feature.properties.Subzone_Name,
        //     feature.properties._value
        //   ]
        //   const $content = document.createElement('div')
        //   content.filter(item => item).forEach(item => {
        //     const $p = document.createElement('p')
        //     $p.textContent = item
        //     $content.appendChild($p)
        //   })
        //   tooltip
        //     .setLngLat(JSON.parse(feature.properties.Address))
        //     .setDOMContent($content)
        //     .addTo(this.map)
        // })
        //
        // this.map.on('mouseleave', heatmap.renderer.layer, e => {
        //   tooltip.remove()
        // })

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
      this.map.setPaintProperty(this[layer].heatmap.renderer.layer, key, style[key])
    })
  },
  reorder (layer) {
    if (!this[layer].heatmap) return
    this.map.moveLayer(this[layer].heatmap.renderer.layer + '-default')
    this.map.moveLayer(this[layer].heatmap.renderer.layer)
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
