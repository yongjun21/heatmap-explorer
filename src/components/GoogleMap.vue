<template>
<div class="map-container">
</template>

<script>
import {googleMapsStyles} from '../constants'
import SgHeatmap from 'sg-heatmap/dist/predefined/URA_region_mp08'
import {tiledMap, insideByKey} from 'sg-heatmap/dist/helpers'

export default {
  mounted () {
    this.map = new google.maps.Map(this.$el, {
      center: new google.maps.LatLng(1.352083, 103.819836),
      zoom: 11,
      minZoom: 11,
      maxZoom: 16,
      styles: googleMapsStyles.blueWater
    })
    this.heatmap = new SgHeatmap()
    tiledMap(this.heatmap, {shape: 'square', tilt: 0, width: 1000, center: [103.819836, 60]})
    insideByKey(this.heatmap)
    this.heatmap
      .setDefaultState('marked', false)
      .registerUpdater((newValue, state) => ({marked: true}))
      .registerStat('type', (state, properties) => {
        let type = (properties.address[0] + properties.address[1]) % 2
        return type >= 0 ? type : type + 2
      })
      .update(this.heatmap.children.map(c => c.id))

    const renderer = this.heatmap.initializeRenderer({
      strokeWeight: 1,
      strokeColor: 'black',
      strokeOpacity: 1,
      fillColor: 'white',
      fillOpacity: 1
    })

    function colorScale (type) {
      return (
        type === 0 ? 'rgba(255, 0, 0, 0.7)'
      : type === 1 ? 'rgba(255, 0, 0, 0.4)'
      : type === 2 ? 'rgba(255, 0, 0, 0.1)'
      : 'white')
    }
    renderer.setMap(this.map)
    this.heatmap.render('type', colorScale)
    renderer.addListener('click', event => {
      console.log(event.feature)
    })
  }
}
</script>

<style>
.map-container {
  min-height: 600px;
}
</style>
