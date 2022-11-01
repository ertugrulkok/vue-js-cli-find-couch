import mutations from "./mutations";
import actions from "./actions.js";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      lehrer: [
        // {
        //   id: "l1",
        //   firstName: "Metehan",
        //   lastName: "Adanur",
        //   areas: ["frontend", "backend", "consulting"],
        //   description:
        //     "Hallo ich bin Metehan und ich habe bereits für viele Unternehmen Webseiten erstellt und bringe Erfahrungen in unterschiedlichsten Technologien mit.",
        //   hourlyRate: 50,
        // },
        // {
        //   id: "l2",
        //   firstName: "Sadeddin",
        //   lastName: "Ertosun",
        //   areas: ["frontend", "consulting"],
        //   description:
        //     "Hallo ich bin Sadeddin. Ich bin leidenschaftlicher Frontend Entwickler und Fotograf und habe bereits viel Erfahrung in den Bereichen sammeln können.",
        //   hourlyRate: 70,
        // },
      ],
    };
  },
  mutations: mutations,
  actions: actions,
  // 'getters: getters' ist das selbe wie nur getters, weil key und value den selben namen haben
  getters,
};
