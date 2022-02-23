<template>
  <p>HEADER</p>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/CreateUser">Create User</router-link>
  </nav>
  <router-view />
  <p>FOOTER</p>
</template>

<script setup lang="ts">
import { provide } from "vue";
import { UserService } from "@/services/User.Service";

provide("UserService", new UserService());
</script>
