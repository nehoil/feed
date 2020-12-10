import Vue from 'vue'
import VueRouter from 'vue-router'
import feedApp from '../views/feed.app.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: feedApp
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
