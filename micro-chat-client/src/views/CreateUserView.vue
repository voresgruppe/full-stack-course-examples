<template>
  <h2>Create new user</h2>
  <br />
  <input v-model="name" placeholder="Enter name" />
  <br />
  <input v-model="email" placeholder="Enter email" />
  <br />
  <button @click="createUser">Create</button>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";
import { UserStore } from "@/stores/user";

const userStore = UserStore();
const name = ref("");
const email = ref("");

function createUser() {
  userStore.create(name.value, email.value);
}
</script>

<style scoped></style>
