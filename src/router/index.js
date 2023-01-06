import Vue from 'vue'
import VueRouter from 'vue-router'

//pages
import Home from '@/views/Home/'
import About from '@/views/About/'
import Directions from '@/views/Directions/'
import Partniers from '@/views/Partniers/'
import Contact from '@/views/Contact/'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/directions',
    name: 'directions',
    component: Directions,
  },
  {
    path: '/partniers',
    name: 'partniers',
    component: Partniers
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x:0, y:0}
    }
  }
})

export default router
