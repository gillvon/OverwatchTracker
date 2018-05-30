import Vue  from 'vue';
import Vuex from 'vuex';
import auth from "./modules/auth";

// Heroes
import heroes from './modules/Heroes';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		auth,
		heroes
	},
});