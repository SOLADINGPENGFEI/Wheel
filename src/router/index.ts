import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import img from '@/views/img.vue'
import detail from '@/views/detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/img',
      name: 'img',
      component: img
    }, {
      path: '/carDetail',
      name: 'carDetail',
      component: detail
    }
  ]
})
