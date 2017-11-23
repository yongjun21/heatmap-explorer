import vSelect from 'vue-select'

import store from './store'
import layer from './layer'
import themes from './themes'

Vue.component('v-select', vSelect)

window.vm = new Vue({
  el: '#app',
  data: {
    themes: themes,
    theme: null,
    theme2: null,
    selectedYear: 0
  },
  computed: {
    selectedTheme: {
      get () {
        const arr = []
        if (this.theme) arr.push(this.theme)
        if (this.theme2) arr.push(this.theme2)
        return arr
      },
      set (arr) {
        this.theme = arr[0]
        this.theme2 = arr[2] || arr[1]
      }
    },
    year () {
      return this.theme && this.theme.years[this.selectedYear]
    }
  },
  mounted () {
    store.map = L.map(this.$refs.map, {
      center: [1.352083, 103.819836],
      zoom: 12,
      minZoom: 12,
      maxZoom: 17,
      maxBounds: [[1.16, 103.582], [1.48073, 104.1647]],
      maxBoundsViscosity: 1.0
    })

    L.tileLayer('https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png', {
      detectRetina: true,
      attribution: 'Map data © contributors, <a href="http://SLA.gov.sg">Singapore Land Authority</a>'
    }).addTo(store.map)

    store.map.attributionControl
      .setPrefix('<img src="https://docs.onemap.sg/maps/images/oneMap64-01.png" style="height:20px;width:20px;"/>')
  },
  components: {layer}
})
