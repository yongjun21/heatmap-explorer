<template lang="html">
  <div class="radio-group">
    <radio v-for="(option, index)  in options"
      v-model="state"
      :value="index"
      :checked="option.checked">
      {{option.label}}
    </radio>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    selected: Number,
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
