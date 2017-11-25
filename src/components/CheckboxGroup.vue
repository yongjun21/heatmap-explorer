<template lang="html">
  <div class="checkbox-group">
    <checkbox v-for="(option, index) in options"
      v-model="state"
      :value="index">
      {{option.label}}
    </checkbox>
  </div>
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
        return this.selected
      },
      set (value) {
        this.$emit('change', value)
      }
    }
  }
}
</script>

<style lang="scss">

</style>
