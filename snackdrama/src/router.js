import Vue from 'vue'
import Router from 'vue-router'
import e404 from './views/e404.vue'
import Home from './views/Home.vue'
import login from './views/login.vue'
import Recommend from './views/Recommend.vue'
import snack from './views/Snack.vue'
import snackdrama from './views/snackdrama.vue'
import snackdrama1 from './views/snackdrama1.vue'
import snackdrama2 from './views/snackdrama2.vue'
import snackdrama3 from './views/snackdrama3.vue'
import nav from './components/nav/nav.vue'
import nav1 from './components/nav/nav-extended.vue'

Vue.use(Router)
/* eslint-disable */
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
       default: Home,
       header: nav
      }
    },
    {
      path: '/recommend',
      name: 'recommend',
      components: {
        default: Recommend,
        header: nav
      }
    },
    {
      path: '/snack/:id',
      name: 'snack',
      components: {
        default: snack,
        header: nav
      }
    },
    {
      path: '/snackdrama',
      name: 'snackdrama',
      components: {
        default: snackdrama,
        header: nav1
      }
    },
    {
      path: '/snackdrama/lomance',
      name: 'lomance',
      components: {
        default: snackdrama1,
        header: nav1
      }
    },
    {
      path: '/snackdrama/comedy',
      name: 'comedy',
      components: {
        default: snackdrama2,
        header: nav1
      }
    },
    {
      path: '/snackdrama/thriller',
      name: 'thriller',
      components: {
        default: snackdrama3,
        header: nav1
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: login,
        // header: nav1
      }
    },
      {
      path: '*',
      name: 'e404',
      components: {
        default: e404,
        header: nav
      }
    }
  ]
})
