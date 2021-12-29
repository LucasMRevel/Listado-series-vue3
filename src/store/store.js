import { createStore } from 'vuex';
import lista from '@/store/modules/lista.js'

const store = createStore({
	modules: {
		lista,
	},

});

export default store;