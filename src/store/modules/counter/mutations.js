export default {
  increment(state) {
    // state.counter++;ç
    state.counter = state.counter + 2;
  },
  increase(state, payload) {
    state.counter = state.counter + payload.value;
  }
};
