import Vue from 'vue';
import VueRouter from 'vue-router';
import Buefy from 'buefy';
import routes from './routes';
import './assets/scss/app.scss';
import App from './App.vue';

Vue.use(Buefy);
Vue.use(VueRouter)

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
	router: new VueRouter({ routes, linkActiveClass: 'is-active' })
}).$mount('#app');
