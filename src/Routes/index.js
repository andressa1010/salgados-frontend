import { createRouter, createWebHistory } from "vue-router";
import Salgados from "../Pages/salgados.vue";
import FormularioEncomendas from "../Pages/formularioEncomendas.vue";

const routes = [
  {
    path: "/",
    component: Salgados,
  },
  { path: "/encomendar/:id", component: FormularioEncomendas, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
