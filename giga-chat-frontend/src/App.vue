<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { UserStore } from "@/stores/userStore";

const userStore = UserStore();
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/createUser">Create User</RouterLink> |
    <RouterLink to="/chat">Chat</RouterLink> |
    <RouterLink to="/login">Login</RouterLink> |
    <RouterLink to="/addFriend">Add friend</RouterLink>
    <span v-if="userStore.userName.length > 0">
      | Logged in as: {{ userStore.userName }}</span
    >
  </nav>
  <br />
  <RouterView />
</template>
