<template>
  <input v-model="inputSearchEmail" placeholder="Search for friends email" />
  <br />
  <br />
  <input v-model="inputSearchName" placeholder="Search for friends name" />
  <br />
  <br />
  <br />
  <ul>
    <li v-for="user in getUsersList()" v-bind:key="user">
      {{ user.name }} + {{ user.email }}
      <button @click="addFriend(user.email)">add Friend</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { UserStore } from "@/stores/userStore";
import { onMounted, ref } from "vue";
import type { User } from "@/models/User";

const userStore = UserStore();
const inputSearchEmail = ref("");
const inputSearchName = ref("");
let usersList: Array<User> = [];
let mount = false;

function getUsersList() {
  if (inputSearchName.value.length > 0) {
    handleNameSearch();
    /*
  } else if (inputSearchEmail.value.length > 0) {
    handleEmailSearch();
     */
  } else {
    getAll();
  }
  return usersList;
}

/*
function handleEmailSearch() {
  userStore.searchEmail(inputSearchEmail.value);
  usersList = userStore.searchUsers
}

 */

function handleNameSearch() {
  userStore.searchName(inputSearchName.value);
  usersList = userStore.searchUsers;
}

function getAll() {
  userStore.getAll();
  usersList = userStore.usersAll;
}

function addFriend(email: string) {
  //todo
}
</script>

<style scoped></style>
