<template lang="html">
  <div class="filter-control">
    <component
      :is="controlType"
      v-if="control"
      v-model="selectedFilter"
      :options="control.items">
    </component>
  </div>
</template>

<script>
import store from '../store'

import RadioGroup from './RadioGroup.vue'
import CheckboxGroup from './CheckboxGroup.vue'
import RangeSelector from './RangeSelector.vue'

import {generateAccessor} from '../helpers'

export default {
  data () {
    return {
      id: store.add(),
      selectedFilter: null
    }
  },
  props: {
    theme: Object,
    year: Number,
    color: Function,
    opacity: Number
  },
  computed: {
    source () {
      return this.theme && this.theme.sources[this.theme.mapping[this.year].source]
    },
    control () {
      return this.theme && this.theme.controls[this.theme.mapping[this.year].control]
    },
    controlType () {
      const component = {
        radio: 'RadioGroup',
        checkbox: 'CheckboxGroup',
        range: 'RangeSelector'
      }
      return this.control && component[this.control.type]
    },
    accessor () {
      return generateAccessor(this.control, this.year)
    },
    style () {
      return {
        opacity: this.opacity * 1,
        fillOpacity: this.opacity * 0.7
      }
    }
  },
  methods: {
    onChange () {
      if (!this.accessor) return
      if (store[this.id].source === this.source) {
        store.render(this.id, this.accessor(this.selectedFilter), this.theme.format)
        store.adjust(this.id, this.style)
        return
      }

      const heatmap = store.load(this.id, this.source, this.color)
      if (heatmap instanceof Promise) {
        heatmap.then(() => this.onChange())
      } else {
        store.render(this.id, this.accessor(this.selectedFilter), this.theme.format)
        store.adjust(this.id, this.style)
        if (this.opacity > 0.5) store.reorder(this.id)
      }
    }
  },
  watch: {
    accessor: 'onChange',
    selectedFilter: 'onChange',
    control (newValue, oldValue) {
      if (newValue === oldValue) return
      if (this.control) {
        if (this.control.type === 'radio') this.selectedFilter = 0
        else if (this.control.type === 'checkbox') this.selectedFilter = []
        else if (this.control.type === 'range') this.selectedFilter = [0, 1]
      } else {
        store.unload(this.id)
      }
    },
    opacity () {
      store.adjust(this.id, this.style)
      if (this.opacity > 0.5) store.reorder(this.id)
    }
  },
  components: {
    RadioGroup,
    CheckboxGroup,
    RangeSelector
  }
}
</script>
