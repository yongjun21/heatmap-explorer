import Vue from 'vue'
import App from './components/App.vue'

window.vm = new Vue({
  el: '#app',
  render: createElement => createElement(App)
})
