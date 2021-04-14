<template>
  <button @click="login" v-if="!isAuth">Login</button>
  <button @click="logout" v-if="isAuth">Logout</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions({
      login: 'logIn',
      logout: 'logOut'
    })
  },
  computed: {
    isAuth() {
      return this.$store.getters.isLogged;
    }
  }
};
</script>
