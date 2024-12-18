import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/settings",
    name: "profileSettings",
    component: () => import("../views/Settings.vue"),
  },
  {
    path: "/trending",
    name: "trending",
    component: () => import("../views/Trending.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
