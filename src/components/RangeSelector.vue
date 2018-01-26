<template lang="html">
  <v-slider class="range-selector"
    v-model="state"
    :data="options"
    :formatter="option => option && option.label"
    lazy
    direction="vertical"
    reverse
    piecewise-label
    :tooltip="false"
    :speed="0"
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
    selected: Array,
    options: Array
  },
  computed: {
    state: {
      get () {
        return this.selected.map(index => this.options[index])
      },
      set (values) {
        const indexes = values.map(value => this.options.indexOf(value))
        if (indexes[0] === indexes[1]) {
          indexes[1] += 1
        }
        if (indexes[1] === this.options.length) {
          indexes[0] -= 1
          indexes[1] -= 1
        }
        this.$emit('change', indexes)
      }
    }
  },
  created () {
    if (this.selected.length > 0) return
    const checked = this.options.filter(option => option.checked)
    if (checked.length === 2) this.state = checked
  }
}
</script>

<style lang="scss">
</style>
