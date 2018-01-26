var Vue = require('vue')
var VueRouter = require('vue-router')

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [{ 
    path: '*', 
    component: { template: '<p>Not found</p>' }
  },
  { path: '/', 
    redirect: '/about' },
  {
    path: '/about', 
    component: { template: '<p>About Me</p>' }
  },
  {
    path: '/projects', 
    component: { template: '<p>My Projects</p>' }
  }],
})

var App = Vue.extend()

const app = new Vue({
  router: router
}).$mount('#app')