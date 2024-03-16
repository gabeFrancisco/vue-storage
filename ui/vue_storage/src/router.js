;
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: () => import("./views/HomeView.vue")},
  { path: "/products", component: () => import("./views/ProductsView.vue")}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
