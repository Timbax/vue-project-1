import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "inicio",
      component: () => import("../components/InicioComponent.vue"),
    },
    {
      path: "/el-contador",
      name: "el-contador",
      component: () => import("../modules/contador/ElContador.vue"),
    },
    {
      path: "/lista-de-tareas",
      name: "lista-de-tareas",
      component: () => import("../modules/listaTareas/components/ListaTareas.vue"),
    },
    {
      path: "/saludos",
      name: "saludos",
      component: () => import("../components/SaludosComponent.vue"),
    },
    {
      path: "/registrar",
      name: "registrar",
      component: () => import("../modules/registro/views/RegistrarView.vue"),
    },
  ],
});

export default router;
