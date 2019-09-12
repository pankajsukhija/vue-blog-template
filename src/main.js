import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

Vue.config.productionTip = false
// Vue.config.devtools = process.env.NODE_ENV === 'development'
Vue.config.devtools = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor;