import vSelect from 'vue-select'
import vSlider from 'vue-slider-component'

import {YlOrRd, GnBu} from 'sg-heatmap/dist/es/helpers/color'

import store from './store'
import layer from './layer'
import themes from './themes'

Vue.component('v-select', vSelect)
Vue.component('v-slider', vSlider)

window.vm = new Vue({
  el: '#app',
  data: {
    themes: themes,
    years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    colors: [YlOrRd(), GnBu()],
    theme: null,
    theme2: null,
    selectedYear: 2016,
    blend: 0
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
      return this.theme &&
        this.theme.years.filter(year => year <= this.selectedYear).pop()
    },
    year2 () {
      return this.theme2 &&
        this.theme2.years.filter(year => year <= this.selectedYear).pop()
    }
  },
  watch: {
    theme2 (value) {
      if (!value) this.blend = 0
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
