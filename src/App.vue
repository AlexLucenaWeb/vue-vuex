<template>
  <base-container title="Vuex" v-if="isLogged">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addTen">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import {mapGetters} from 'vuex';

import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // }
    ...mapGetters(['isLogged'])
  },
  methods: {
    addTen() {
      // // this.$store.commit('increase', { value: 10 });
      // // New way to commit with and object:
      // this.$store.commit({
      //   // the type is the name of the commit:
      //   type: 'increase',
      //   value: 10
      // })

      // commit using Actions:
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
