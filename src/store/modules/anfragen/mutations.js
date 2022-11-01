export default {
  addAnfrage(state, payload) {
    state.anfragen.push(payload);

    console.log(state.anfragen);
  },
  setAnfragen(state, payload) {
    state.anfragen = payload;
  },
};
