import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateUser from "../views/CreateUser.vue";
import ChatView from "../views/ChatView.vue";
import LoginView from "../views/LoginView.vue";
import AddFriendView from "../views/AddFriendView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/chat",
      name: "Chat",
      component: ChatView,
    },
    {
      path: "/createUser",
      name: "CreateUser",
      component: CreateUser,
    },
    {
      path: "/login",
      name: "LoginView",
      component: LoginView,
    },
    { path: "/addFriend", name: "AddFriendView", component: AddFriendView },
  ],
});

export default router;
