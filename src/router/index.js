import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/helloworld",
    name: "HelloWorld",
    component: () => import("@/components/HelloWorld.vue"),
  },
//   {
//     path: "/setting",
//     name: "Setting",
//     component: () => import("@/views/Setting.vue"),
//   },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});