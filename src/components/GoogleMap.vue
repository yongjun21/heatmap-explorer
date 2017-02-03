<template>
<div class="map-container">
</template>

<script>
import {googleMapsStyles} from '../constants'
import SgHeatmap from 'sg-heatmap'
import hextile from 'hextile'
import URAregionMP98 from 'sg-heatmap/dist/predefined/URA_region_mp98'

export default {
  mounted () {
    this.map = new google.maps.Map(this.$el, {
      center: new google.maps.LatLng(1.352083, 103.819836),
      zoom: 11,
      minZoom: 11,
      maxZoom: 16,
      styles: googleMapsStyles.blueWater
    })
    const basemap = new URAregionMP98().children
    console.log(basemap)
    const tiledMap = hextile(basemap, {shape: 'hexagon'})
    console.log(tiledMap)
    this.heatmap = new SgHeatmap(tiledMap)
    this.heatmap.initializeRenderer({
      weight: 1,
      color: 'black',
      opacity: 1,
      fillColor: 'white',
      fillOpacity: 0.4
    }, {fillOpacity: 0.7})
  }
}
</script>

<style>
.map-container {
  min-height: 500px;
}
</style>
