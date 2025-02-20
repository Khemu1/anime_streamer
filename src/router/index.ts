import path from "path";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/settings",
    name: "profileSettings",
    component: () => import("@/views/Settings.vue"),
  },
  {
    path: "/trending",
    name: "trending",
    component: () => import("@/views/Trending.vue"),
  },
  {
    path: "/history",
    name: "history",
    component: () => import("@/views/History.vue"),
  },
  {
    path: "/schedule",
    name: "schedule",
    component: () => import("@/views/Schedule.vue"),
  },
  { path: "/", name: "home", component: () => import("@/views/Home.vue") },
  {
    path: "/info",
    name: "info",
    component: () => import("@/views/Info.vue"),
  },
  {
    path: "/video",
    name: "video",
    component: () => import("@/views/Video.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("@/views/Search.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    name: "PageNotFound",
    component: () => import("@/components/not-found/GeneralNotFound.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
