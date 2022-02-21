<script setup>
import { ref } from "vue";
import userService from "@/services/UserService.ts";

const userName = ref("");
const created = ref("");

function createUser() {
  console.log("Create user: " + userName.value);
  userService.create({name: userName}).then(value => created.value = value);
}
</script>

<template>
  <h1>Create new user</h1>
  <input v-model.trim="userName" />
  <button @click="createUser">Create user</button>
  <p>Creating user: {{ userName }}</p>
  <p>Response: {{ created }}</p>
</template>

<style scoped></style>
