import { createRouter, createWebHistory } from "vue-router";
import CreateUserView from "../views/CreateUserView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/CreateUser",
      name: "Create User",
      component: CreateUserView,
    },
  ],
});

export default router;
