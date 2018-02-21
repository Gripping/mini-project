import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/components/FrontPage'
import CategoryPage from '@/components/CategoryPage'
import SinglePage from '@/components/SinglePage'
import ContactPage from '@/components/ContactPage'

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
      path: '/SinglePage/:id',
      name: 'SinglePage',
      component: SinglePage
    },
    {
      path: '/ContactPage/',
      name: 'ContactPage',
      component: ContactPage
    }
  ]
})
