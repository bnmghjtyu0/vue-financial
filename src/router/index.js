import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Index from '@/page/Index'
import About from '@/page/About'
import Products from '@/page/Products'
import Services from '@/page/Services'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Products',
      name: 'Products',
      component: Products
    },
    {
      path: '/Services',
      name: 'Services',
      component: Services
    }
  ]
})
