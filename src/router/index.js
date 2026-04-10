import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "inicio",
      component: () => import("../components/ElContador.vue"),
    },
    {
      path: "/el-contador",
      name: "el-contador",
      component: () => import("../components/ElContador.vue"),
    },
    {
      path: "/lista-de-tareas",
      name: "lista-de-tareas",
      component: () => import("../components/ListaTareas.vue"),
    },
    {
      path: "/saludos",
      name: "saludos",
      component: () => import("../components/SaludosComponent.vue"),
    },
  ],
});

export default router;
