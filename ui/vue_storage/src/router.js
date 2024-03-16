import HomeView from "./views/HomeView.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [{ path: "/hello", name: "home", component: HomeView }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
