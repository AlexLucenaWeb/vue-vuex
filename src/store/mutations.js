export default {
  // logIn(state) {
  //   state.isLogged = true
  // },
  // logOut(state) {
  //   state.isLogged = false
  // },
  setAuth(state, payload) {
    state.isLogged = payload.isAuth;
  }
};
