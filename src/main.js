import Vue from 'vue';
import VueRouter from 'vue-router';
import Buefy from 'buefy';
import routes from './routes';
import './assets/scss/app.scss';
import App from './App.vue';

Vue.use(Buefy);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
	router: new VueRouter({ routes, linkActiveClass: 'is-active' })
}).$mount('#app');

// script to serve assets folder as /dist/
(ctx => {
	let keys = ctx.keys();
	let values = keys.map(ctx);
	return keys.reduce((o, k, i) => { o[k] = values[i]; return o; }, {});
})(require.context('./', true, /.*/));