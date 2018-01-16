import vSelect from 'vue-select'
import vSlider from 'vue-slider-component'
import CheckboxRadio from 'vue-checkbox-radio'

import {querystring} from './helpers'

import {YlOrRd, GnBu} from 'sg-heatmap/dist/es/helpers/color'

import store from './store'
import themes from './themes'
import Layer from './components/Layer.vue'

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
    },
    query () {
      return {
        theme: this.selectedTheme.map(theme => theme.hash),
        year: this.selectedYear !== 2016 ? this.selectedYear : null,
        blend: this.blend !== 0 ? this.blend : null
      }
    }
  },
  watch: {
    compareTheme (theme) {
      if (!theme) this.blend = 0
    },
    query (q) {
      window.history.replaceState(q, '', window.location.origin + querystring.stringify(q))
    }
  },
  mounted () {
    if (window.location.search) {
      const query = querystring.parse(window.location.search)
      if ('theme' in query) {
        this.selectedTheme = query.theme.split(',')
          .map(hash => themes.find(theme => theme.hash === hash))
      }
      if ('year' in query) {
        const year = +query.year
        if (this.years.filter(y => y === year).length > 0) {
          this.selectedYear = year
        }
      }

      if ('blend' in query) {
        const blend = +query.blend
        if (blend >= 0 && blend <= 1) {
          this.blend = blend
        }
      }
    }

    mapboxgl.accessToken = 'pk.eyJ1IjoieW9uZ2p1bjIxIiwiYSI6ImNpdTY5c2tyZzBqaDgyemxwYjk0Nnlic2UifQ.A5OHCYPcLTupbo1Qi3t5OQ'

    store.map = new mapboxgl.Map({
      container: this.$refs.map,
      center: [103.819836, 1.352083],
      zoom: 10,
      minZoom: 10,
      maxZoom: 15,
      style: 'mapbox://styles/yongjun21/cjcer1xlm3nqo2rp4tv7g45y7'
    })

    store.canLoad = new Promise((resolve, reject) => {
      store.map.on('load', resolve)
    })

    // store.tile = L.tileLayer('https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png', {
    //   detectRetina: true,
    //   attribution: 'Map data © contributors, <a href="http://SLA.gov.sg">Singapore Land Authority</a>'
    // })
    //
    // store.tile.on('loading', event => {
    //   store.canLoad = new Promise((resolve, reject) => {
    //     store.tile.on('load', onLoad)
    //     function onLoad () {
    //       setTimeout(resolve, 200)
    //       store.tile.off('load', onLoad)
    //     }
    //   })
    // })
    //
    // store.tile.addTo(store.map)
    //
    // store.map.attributionControl
    //   .setPrefix('<img src="https://docs.onemap.sg/maps/images/oneMap64-01.png" style="height:20px;width:20px;"/>')
  },
  components: {Layer}
})
