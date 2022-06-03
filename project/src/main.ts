import Vue from 'vue'

import './assets/scss/style.scss';
import './components';
import './configs';

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

window.VueContext = new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');

window.VueContext.$mount('#app');

declare global {
	interface Window { VueContext: Vue, hbspt: any }
}