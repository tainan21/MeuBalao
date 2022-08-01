import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/layout.scss';
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles

Vue.use(Vuesax, {})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  el: '#app',
  methods: {
  },
  render: h => h(App)
}).$mount('#app')

