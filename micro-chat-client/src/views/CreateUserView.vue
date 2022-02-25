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
import { ref } from "vue";
import { UserStore } from "@/stores/user";

const userStore = UserStore();
const name = ref("");
const email = ref("");

function createUser() {
  userStore.loggedInUser = {
    uuid: "TMP_UUID",
    name: name.value,
    email: email.value,
  };
}
</script>

<style scoped></style>
