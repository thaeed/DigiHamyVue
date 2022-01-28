import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Main from "../views/Main.vue";
import NotFound from "../views/NotFound.vue";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Login,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
  { path: '/:pathMatch(.*)*', redirect: "/404" },
  {
    path: "/404",
    name: "404",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
