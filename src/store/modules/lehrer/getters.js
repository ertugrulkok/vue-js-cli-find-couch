export default {
  lehrer(state) {
    return state.lehrer;
  },
  hasLehrer(state) {
    return state.lehrer && state.lehrer.length > 0;
    // gibt entweder true oder false zurück
  },
  isLehrer(state, getters, rootState, rootGetters) {
    const lehrer = getters.lehrer;
    const userId = rootGetters.userId;
    return lehrer.some((lehrer) => lehrer.id === userId);
  },

  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  },
};
