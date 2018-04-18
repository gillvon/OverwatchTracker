//Defining Vue and VueRouter
import Vue from 'vue';
import VueRouter from 'vue-router';
import jwtToken from './../helpers/jwt-token';

Vue.use(VueRouter);

import routes from './routes';

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach(async (to, from, next) => {
	// just logged in: localStorage has token, but state does not have auth user
	if (jwtToken.getToken() && !store.getters.isLoggedIn) {
		let {data: authUser} = await axios.get(api.currentUser);
		await store.dispatch('setAuthUser', authUser);
	}

	if (to.meta.requiresAuth) {
		if (store.getters.isLoggedIn || jwtToken.getToken())
			return next();
		else
			return next({name: 'login'});
	}
	if (to.meta.requiresGuest) {
		if (store.getters.isLoggedIn || jwtToken.getToken())
			return next({name: 'index'});
		else
			return next();
	}
	next();
});


export default router;