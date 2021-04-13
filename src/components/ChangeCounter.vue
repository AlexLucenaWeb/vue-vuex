<template>
  <button @click="addTwo">Add 2</button>
</template>

<script>
export default {
  methods: {
    addTwo() {
      this.$store.dispatch('increment');
    }
  }
};
</script>
