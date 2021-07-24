import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/views/main.vue"),
  },
  {
    path: "/cv",
    name: "CV",
    component: () => import("@/views/main.vue"),
  },
  {
    path: "/markdown",
    name: "Markdown",
    component: () => import("@/views/markdown/index.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/markdown/list.vue"),
      },
      {
        path: ":path+",
        component: () => import("@/views/markdown/page.vue"),
      },
    ]
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});