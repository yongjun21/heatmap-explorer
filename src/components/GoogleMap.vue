<template>
<div class="map-container">
</template>

<script>
import {googleMapsStyles} from '../constants'
import SgHeatmap from 'sg-heatmap/dist/predefined/URA_region_mp08'
import {tiledMap} from 'sg-heatmap/dist/helpers'

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
    tiledMap(this.heatmap, {shape: 'hexagon', tilt: 90, width: 1000, center: [104.819836, 1.352083]})
    const renderer = this.heatmap.initializeRenderer({
      weight: 1,
      color: 'black',
      opacity: 1,
      fillColor: 'white',
      fillOpacity: 0.4
    }, {fillOpacity: 0.7})
    renderer.setMap(this.map)
    renderer.addListener('click', event => {
      console.log(event.feature)
    })
  }
}
</script>

<style>
.map-container {
  min-height: 500px;
}
</style>
