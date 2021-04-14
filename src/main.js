import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

// vuex Modules:
// The state of a mudle is local 
const conunterModule = {
  namespaced: true,
  // setting up the namespace to true, we need to acces the module resources by the name we give in the root store / name of resource.
  // ['numbers/finalcounter'] 
  // Using mapGetters we just past the name of the module as first argument.
  state() {
    return {
      counter: 0
    };
  },
  mutations: {
    increment(state) {
      // state.counter++;ç
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    }
  },
  actions: {
    increment(context) {
      // Here we commit the mutation we want.
      context.commit('increment');
    },
    increase(context, payload) {
      context.commit('increase', payload);
    }
  },
  getters: {
    // testAuth(stat, getters, rootState, rootGetters){
    //   return state.isLogged;
    // },
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizeCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    }
  }
};

const store = createStore({
  modules: {
    numbers: conunterModule
  },
  state() {
    return {
      isLogged: false
    };
  },

  getters: {
    isLogged(state) {
      return state.isLogged;
    }
  },

  mutations: {
    // logIn(state) {
    //   state.isLogged = true
    // },
    // logOut(state) {
    //   state.isLogged = false
    // },
    setAuth(state, payload) {
      state.isLogged = payload.isAuth;
    }
  },

  actions: {
    logIn(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logOut(context) {
      context.commit('setAuth', { isAuth: false });
    }
  }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
