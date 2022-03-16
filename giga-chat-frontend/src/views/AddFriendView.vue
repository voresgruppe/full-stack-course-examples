<template>
  <input v-model="inputSearchEmail" placeholder="Search for friends email" />
  <button @click="handleEmailSearch">Search</button>
  <br />
  <br />
  <input v-model="inputSearchName" placeholder="Search for friends name" />
  <button @click="handleNameSearch">Search</button>
  <br />
  <br />
  <br />
  <ul>
    <li v-for="user in users">{{ user.name }}</li>
  </ul>
</template>

<script setup lang="ts">
import { UserStore } from "@/stores/userStore";
import { ref } from "vue";

const userStore = UserStore();
const inputSearchEmail = ref("");
const inputSearchName = ref("");

function handleEmailSearch() {
  userStore.searchEmail(inputSearchEmail.value);
}

function handleNameSearch() {
  userStore.searchName(inputSearchName.value);
}
</script>

<style scoped></style>
