import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnimate from 'vue-animate-scroll'

Vue.use(VueAnimate)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
