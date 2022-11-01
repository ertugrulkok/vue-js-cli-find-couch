export default {
  registerLehrer(state, payload) {
    state.lehrer.push(payload);
  },
  setLehrer(state, payload) {
    state.lehrer = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  }
};
