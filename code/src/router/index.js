import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/views/main.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});