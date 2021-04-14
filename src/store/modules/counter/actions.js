export default {
  increment(context) {
    // Here we commit the mutation we want.
    context.commit('increment');
  },
  increase(context, payload) {
    context.commit('increase', payload);
  }
};
