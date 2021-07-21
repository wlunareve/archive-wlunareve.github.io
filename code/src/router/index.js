import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/views/main.vue"),
  },
  {
    path: "/markdown",
    name: "Markdown",
    component: () => import("@/views/markdown.vue"),
  },

];

export default createRouter({
  history: createWebHistory(),
  routes,
});