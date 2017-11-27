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
      const {control, year} = this
      if (!control || !year) return
      const accessors = control.items.map(item => {
        return d => {
          return item.keys.reduce((sum, path) => {
            return sum + get(d[year], path)
          }, 0)
        }
      })

      const threshold = control.threshold || 0
      const norm = control.normalize ? d => {
        return control.normalize.reduce((sum, path) => {
          return sum + get(d[year], path)
        }, 0)
      } : d => 1

      switch (control.type) {
        case 'radio':
          return selected => {
            return d => {
              const nom = accessors[selected](d)
              const denom = norm(d)
              if ((control.normalize ? denom : nom) < threshold) return null
              return nom / denom
            }
          }

        case 'checkbox':
          return selected => {
            return d => {
              const nom = selected.reduce((sum, index) => {
                return sum + accessors[index](d)
              }, 0)
              const denom = norm(d)
              if ((control.normalize ? denom : nom) < threshold) return null
              return nom / denom
            }
          }

        case 'range':
          return (selected) => {
            return d => {
              const nom = accessors.reduce((sum, accessor, index) => {
                if (index < selected[0] || index >= selected[1]) return sum
                return sum + accessor(d)
              }, 0)
              const denom = norm(d)
              if ((control.normalize ? denom : nom) < threshold) return null
              return nom / denom
            }
          }
      }
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
        else if (this.control.type === 'checkbox') this.selectedFilter = [0]
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

function get (d, path) {
  let value = d
  path.split('.').forEach(key => {
    value = value[key]
  })
  return value
}
</script>
