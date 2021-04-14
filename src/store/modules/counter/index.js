// vuex Modules:
// The state of a mudle is local
import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

export default {
  namespaced: true,
  // setting up the namespace to true, we need to acces the module resources by the name we give in the root store / name of resource.
  // ['numbers/finalcounter']
  // Using mapGetters we just past the name of the module as first argument.
  state() {
    return {
      counter: 0
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters
};
