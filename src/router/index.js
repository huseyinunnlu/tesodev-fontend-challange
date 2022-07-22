import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/Index.vue"),
  },
  {
    path: "/results",
    name: "results",
    component: () => import("../views/Results.vue"),
  },
  {
    path: "/add",
    name: "add-item",
    component: () => import("../views/Add.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
