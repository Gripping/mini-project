import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/components/FrontPage'
import CategoryPage from '@/components/CategoryPage'
import SinglePage from '@/components/SinglePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FrontPage',
      component: FrontPage
    },
    {
      path: '/CategoryPage',
      name: 'CategoryPage',
      component: CategoryPage
    },
    {
      path: '/SinglePage',
      name: 'SnglePage',
      component: SinglePage
    }
  ]
})
