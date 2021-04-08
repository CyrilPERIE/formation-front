import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Exo1 from '../components/Exo1.vue'
import Exo2 from '../components/Exo2.vue'
import Exo3 from '../components/Exo3.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/exo1',
    name: 'Exo1',
    component: Exo1
  },
  {
    path: '/exo2',
    name: 'Exo2',
    component: Exo2
  },
  {
    path: '/exo3',
    name: 'Exo3',
    component: Exo3
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
