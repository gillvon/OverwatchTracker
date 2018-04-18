import $     from 'jquery';
import Vue   from 'vue';
import axios from 'axios';

window.$ = window.jQuery = $;
window.axios = axios;
require('./bootstrap');

import router from './routes/router';
import store  from './store/index';
import Master from './components/Master';

Vue.component('app', Master);

const app = new Vue({
	router,
	store
}).$mount('#app');