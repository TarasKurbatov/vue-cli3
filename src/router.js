import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home Page - Example App',
        metaTags: [
          {
            name: 'description',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      }
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        h1: 'About Page',
        title: 'About Page - Example App',
        metaTags: [
          {
            name: 'description',
            content: 'The about page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The about page of our example app.'
          }
        ]
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('./views/Contacts.vue')
    },
    {
        path: '/delivery',
        name: 'delivery',
        component: () => import('./views/Delivery.vue')
    },
    {
        path: '/news',
        name: 'news',
        component: () => import('./views/News.vue')
    },
    {
        path: '/news/:id',
        name: 'newsdetail',
        component: () => import('./views/NewsDetail.vue')
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('./views/Cart.vue')
    },
  ]
})
