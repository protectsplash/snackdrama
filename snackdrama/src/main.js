/* eslint-disable */
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)
import VueAgile from 'vue-agile'
Vue.use(VueAgile)
Vue.config.productionTip = false
import GAuth from 'vue-google-oauth2'
Vue.use(GAuth, {
  clientId: '60131702068-snpco444veqtdc1rgajvcjj79sm84kh9.apps.googleusercontent.com',
  scope: 'profile email openid'
})

import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import VueApollo from 'vue-apollo'
Vue.use(VueApollo)
const { createUploadLink } = require('apollo-upload-client')

//token 인증
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    localStorage.getItem('USER_TOKEN') ? next() : next('/login')
  } else {
    next()
  }
})

const httpLink = createUploadLink({uri: 'https://us1.prisma.sh/mandangstartup-534cc1/snackdrama/dev'})
const httpLinkAuth = setContext(async (_, {headers}) => {
  // get the authentication token from localstorage if it exists
  const token = await localStorage.getItem('USER_TOKEN')
  // await localStorage.clear()
  // await localStorage.removeItem('USER_TOKEN')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const apolloClient = new ApolloClient({
  link: httpLinkAuth.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true,
  query: {
    fetchPolicy: 'no-cache'
  }
})
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

new Vue({
  router,
  store,
  provide: apolloProvider.provide(),
  render: h => h(App)
}).$mount('#app')
