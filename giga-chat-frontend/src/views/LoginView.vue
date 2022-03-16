<template>
  <input v-model="inputEmail" placeholder="email" /> <br />
  <input type="password" v-model="inputPassword" placeholder="password" /><br />
  <button @click="handleLogin">login</button>
</template>

<script setup lang="ts">
import { UserStore } from "@/stores/userStore";
import { ref } from "vue";

const userStore = UserStore();
const inputEmail = ref("");
const inputPassword = ref("");

function handleLogin() {
  userStore.login(inputEmail.value, inputPassword.value);
}
</script>

<style scoped></style>
