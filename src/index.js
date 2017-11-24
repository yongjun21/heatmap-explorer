import vSelect from 'vue-select'
import vSlider from 'vue-slider-component'
import CheckboxRadio from 'vue-checkbox-radio'

import {YlOrRd, GnBu} from 'sg-heatmap/dist/es/helpers/color'

import store from './store'
import layer from './layer'
import themes from './themes'

Vue.use(CheckboxRadio)
Vue.component('v-select', vSelect)
Vue.component('v-slider', vSlider)

window.vm = new Vue({
  el: '#app',
  data: {
    themes: themes,
    years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    colors: [YlOrRd(), GnBu()],
    baseTheme: null,
    compareTheme: null,
    selectedYear: 2016,
    blend: 0
  },
  computed: {
    selectedTheme: {
      get () {
        const arr = []
        if (this.baseTheme) arr.push(this.baseTheme)
        if (this.compareTheme) arr.push(this.compareTheme)
        return arr
      },
      set (arr) {
        this.baseTheme = arr[0]
        this.compareTheme = arr[2] || arr[1]
      }
    },
    baseYear () {
      return this.baseTheme &&
        this.baseTheme.years.filter(year => year <= this.selectedYear).pop()
    },
    compareYear () {
      return this.compareTheme &&
        this.compareTheme.years.filter(year => year <= this.selectedYear).pop()
    }
  },
  watch: {
    compareTheme (theme) {
      if (!theme) this.blend = 0
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
