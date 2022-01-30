import { createRouter, createWebHistory } from "vue-router";
import Categories from "../views/Categories.vue";
import Main from "../views/Main.vue";
import NotFound from "../views/NotFound.vue";
const routes = [
  {
    path: "/",
    name: "Categories",
    component: Categories,
    children: [
      { path: "/main", name: "Main", component: Main },
      { path: "/categories/:id", name: "Categories", component: Categories },
    ],
  },

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
