import store from './store'

import RadioGroup from './components/RadioGroup.vue'
import CheckboxGroup from './components/CheckboxGroup.vue'
import RangeSelector from './components/RangeSelector.vue'

export default {
  data () {
    return {
      id: store.add(),
      selectedItem: 0
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
      const norm = control.normalize ? d => get(d[year], control.normalize) : d => 1

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
                if (index < selected[0] || index > selected[1]) return sum
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
        store.render(this.id, this.accessor(this.selectedItem), this.theme.format)
        store.adjust(this.id, this.style)
        return
      }

      const heatmap = store.load(this.id, this.source, this.color)
      if (heatmap instanceof Promise) {
        heatmap.then(() => this.onChange())
      } else {
        store.render(this.id, this.accessor(this.selectedItem), this.theme.format)
        store.adjust(this.id, this.style)
      }
    }
  },
  watch: {
    accessor: 'onChange',
    selectedItem: 'onChange',
    control () {
      if (this.control) {
        if (this.control.type === 'radio') this.selectedItem = 0
        else if (this.control.type === 'checkbox') this.selectedItem = [0]
        else if (this.control.type === 'range') this.selectedItem = [0, 0]
      } else {
        store.unload(this.id)
      }
    },
    style () {
      store.adjust(this.id, this.style)
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
