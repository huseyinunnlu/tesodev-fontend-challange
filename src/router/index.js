import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/Index.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
