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
    opacity: Number,
    defaultSelected: [Number, Array]
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
        color: {
          opacity: this.opacity * 1,
          fillOpacity: this.opacity * 0.7
        },
        default: {
          opacity: this.opacity * 0.3,
          fillOpacity: this.opacity * 0.3
        }
      }
    }
  },
  methods: {
    onChange () {
      if (!this.accessor) return
      if (store[this.id].source === this.source) {
        store.render(this.id, this.accessor(this.selectedFilter), this.theme.format)
        store.adjust(this.id, this.style)
        this.$emit('update', this.selectedFilter)
        return
      }

      const heatmap = store.load(this.id, this.source, this.color)
      if (heatmap instanceof Promise) {
        heatmap.then(() => this.onChange())
      } else {
        store.render(this.id, this.accessor(this.selectedFilter), this.theme.format)
        store.adjust(this.id, this.style)
        if (this.opacity > 0.5) store.reorder(this.id)
        this.$emit('update', this.selectedFilter)
      }
    }
  },
  watch: {
    accessor: 'onChange',
    selectedFilter: 'onChange',
    control (newControl, oldControl) {
      if (newControl === oldControl) return
      if (newControl) {
        if (newControl.type === 'radio') {
          this.selectedFilter = this.defaultSelected instanceof Array
            ? this.defaultSelected[0] : (this.defaultSelected || 0)
        } else if (newControl.type === 'checkbox') {
          this.selectedFilter = this.defaultSelected instanceof Array
            ? this.defaultSelected : []
        } else if (newControl.type === 'range') {
          this.selectedFilter = this.defaultSelected instanceof Array
            ? this.defaultSelected : []
        }
      } else {
        store.unload(this.id)
        this.selectedFilter = null
        this.$emit('update', null)
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
