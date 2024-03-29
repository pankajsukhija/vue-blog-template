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
      component: Home
    },
    // {
    //   path: '/about/:something',
    //   name: 'aboutSomething',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path: '/about',
      name: 'about',
      component: () => import( './views/About.vue')
    },

    {
      path: '/post',
      name: 'post',
      component: () => import( './views/Post.vue')
    },

    {
      path: '/charts',
      name: 'charts',
      component: () => import( './views/Charts.vue')
    },

    {
      path: '*',
      component : () => import( './views/NotFound.vue')
    }

  ]
})
