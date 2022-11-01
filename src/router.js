import { createRouter, createWebHistory } from "vue-router";

import NotFound from "./pages/NotFound.vue";
import AnfrageErhalten from "./pages/anfragen/AnfrageErhalten.vue";
import ContactLehrer from "./pages/anfragen/ContactLehrer.vue";
import LehrerDetail from "./pages/lehrer/LehrerDetail.vue";
import LehrerListe from "./pages/lehrer/LehrerListe.vue";
import LehrerRegistration from "./pages/lehrer/LehrerRegistration.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/lehrer" },
    { path: "/lehrer", component: LehrerListe },
    {
      path: "/lehrer/:id",
      props: true,
      component: LehrerDetail,
      children: [
        { path: "contact", component: ContactLehrer }, // lehrer/lehrerID/contact
      ],
    },
    { path: "/registration", component: LehrerRegistration },
    { path: "/anfragen", component: AnfrageErhalten },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
