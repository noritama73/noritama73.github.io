import Vue from 'vue'
import Router from 'vue-router'

import Top from '../views/Top'
import About from '../views/About'
import Skills from '../views/Skills'
import Works from '../views/Works'
import Social from '../views/Social'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', component: Top },
    { path: '/about', component: About },
    { path: '/skills', component: Skills },
    { path: '/works', component: Works },
    { path: '/social', component: Social}
  ]
})

export default router