import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      isLogged: false
    };
  },

  getters: {
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
    },
    isLogged(state) {
      return state.isLogged;
    }
  },

  mutations: {
    increment(state) {
      // state.counter++;ç
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
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
    increment(context) {
      // Here we commit the mutation we want.
      context.commit('increment');
    },
    increase(context, payload) {
      context.commit('increase', payload);
    },
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
