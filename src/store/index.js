import { createStore } from 'vuex';

import rootMutations from './mutations.js'
import rootActions from './actions.js'
import rootGetters from './getters.js'
import counterModule from './modules/counter/index.js'

const store = createStore({
  modules: {
    numbers: counterModule
  },
  state() {
    return {
      isLogged: false
    };
  },
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions
});

export default store;