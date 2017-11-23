import store from './store'

export default {
  data () {
    return {
      id: store.add(),
      selectedItem: 0
    }
  },
  props: {
    theme: Object,
    year: String
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
    }
  },
  methods: {
    onChange () {
      if (!this.theme) return
      if (store[this.id].source === this.source) {
        store.render(this.id, this.accessor(this.selectedItem), this.theme.format)
      }

      const heatmap = store.load(this.source, this.id)
      if (heatmap instanceof Promise) {
        heatmap.then(() => this.onChange())
      } else {
        store.render(this.id, this.accessor(this.selectedItem), this.theme.format)
      }
    }
  },
  watch: {
    accessor: 'onChange',
    selectedItem: 'onChange',
    control () {
      if (this.control) {
        if (this.control.type === 'radio') this.selectedItem = 0
        else if (this.control.type === 'checkbox') this.selectedItem = []
        else if (this.control.type === 'range') this.selectedItem = [0, 0]
      } else {
        if (store[this.id].heatmap) store.unload(this.id)
      }
    }
  }
}

function get (d, path) {
  let value = d
  path.split('.').forEach(key => {
    value = value[key]
  })
  return value
}
