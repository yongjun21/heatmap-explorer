<template>
  <div class='container'>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue App'
    }
  }
}
</script>

<style>
.container {
  width: 100%;

  p {
    color: red;
  }
}
</style>
