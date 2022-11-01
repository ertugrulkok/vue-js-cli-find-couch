import { createStore } from "vuex";

import lehrerModules from "./modules/lehrer/index.js";
import anfragenModules from "./modules/anfragen/index.js";

const store = createStore({
  modules: {
    lehrerKey: lehrerModules,
    anfragenKey: anfragenModules,
  },
  state() {
    return {
      userId: "l1",
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
  mutations: {
    login(state, payload) {
      state.userId = payload;
    },
  },
  actions: {
    login(context, payload) {
      context.commit("login", payload);
    },
  },
});

export default store;
