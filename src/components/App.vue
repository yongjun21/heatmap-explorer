<template>
<div class='container'>
  <GoogleMap></GoogleMap>
</div>
</template>

<script>
import GoogleMap from './GoogleMap.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue App'
    }
  },
  components: {
    GoogleMap
  }
}
</script>

<style>
.container {
  width: 100%;
}
</style>
