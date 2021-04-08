import Vue from 'vue'
import App from './App.vue'
import EvaIcons from 'vue-eva-icons'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(EvaIcons, VueRouter)

new Vue({
  render: h => h(App),
}).$mount('#app')
