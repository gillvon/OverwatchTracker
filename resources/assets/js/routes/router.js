// Defining Vue and VueRouter
import Vue from 'vue';
import VueRouter from 'vue-router';
import jwtToken from './../helpers/jwt-token';

Vue.use(VueRouter);

import routes from './routes';

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;	