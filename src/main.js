import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/layout.scss';
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
  Vue.use(Vuesax, {
    // options here
  })

Vue.config.productionTip = false


new Vue({
  router,
  store,
  el: '#app',
  methods: {
  },
  render: h => h(App)
}).$mount('#app')

Vue.use(VueScrollTo)
const VueScrollTo = require('vue-scrollto')
// You can also pass in the default options
VueScrollTo.setDefaults({
  container: "body",
  duration: 500,
  lazy: false,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})