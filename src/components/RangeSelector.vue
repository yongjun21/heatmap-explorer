<template lang="html">
  <v-slider class="blend-control"
    v-model="state"
    :data="options"
    :formatter="option => option.label"
    lazy
    direction="vertical"
    reverse
    piecewise-label
    :tooltip="false"
    :speed="0.1"
    width="8"
    height="100%">
  </v-slider>
</template>

<script>
export default {
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    selected: Object,
    options: Array
  },
  computed: {
    state: {
      get () {
        return this.selected.map(index => this.options[index])
      },
      set (values) {
        const indexes = values.map(value => this.options.indexOf(value))
        this.$emit('change', indexes)
      }
    }
  }
}
</script>

<style lang="scss">
</style>
