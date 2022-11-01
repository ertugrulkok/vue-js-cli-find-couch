export default {
  anfragen(state, getters, rootState, rootGetters) {
    const lehrerId = rootGetters.userId;
    console.log(state.anfragen);
    return state.anfragen.filter((req) => req.lehrerId === lehrerId);
  },
  hatAnfragen(state, getters) {
    return getters.anfragen && getters.anfragen.length > 0;
  },
};
