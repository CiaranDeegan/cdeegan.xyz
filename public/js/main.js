var Vue = require('vue')
var VueRouter = require('vue-router')

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [{ 
    path: '*', 
    component: require('../components/Error.vue')
  },
  { path: '/', 
    redirect: '/about' 
  },
  {
    path: '/about', 
    component: require('../components/About.vue')
  },
  {
    path: '/projects', 
    component: require('../components/Projects.vue')
  }],
})

var App = Vue.extend()

const app = new Vue({
  router: router
}).$mount('#app')