<template>
  <input v-model="inputSearchName" placeholder="Search for users name" />
  <button v-on:click="handleNameSearch()">Search</button>
  <br />
  <br />
  <br />
  List of users matching search criteria
  <ul>
    <li v-for="user in getUsersList()" v-bind:key="user">
      {{ user.name + " " + user.email }}
    </li>
  </ul>
  <br />
  <input v-model="inputSearchEmail" placeholder="Input friends email" />
  <button v-on:click="addFriend()">add Friend</button>
</template>

<script setup lang="ts">
import { UserStore } from "@/stores/userStore";
import { ref } from "vue";
import type { User } from "@/models/User";

const userStore = UserStore();
const inputSearchEmail = ref("");
const inputSearchName = ref("");
let usersList: Array<User> = [];

function getUsersList() {
  let searchInput = inputSearchName.value;
  if (searchInput.length === 0) {
    return getAll();
  } else return handleNameSearch();
}

function handleNameSearch() {
  let searchInput = inputSearchName.value;
  userStore.searchName(searchInput);
  usersList = userStore.searchUsers;
  return userStore.searchUsers;
}

function getAll() {
  userStore.getAll();
  usersList = userStore.usersAll;
  return userStore.usersAll;
}

function addFriend() {
  if (inputSearchEmail.value.length != 0) {
    userStore.searchEmail(inputSearchEmail.value);
    if (
      userStore.loggedEmail != undefined &&
      userStore.loggedEmail != "" &&
      userStore.searchUserEmail.email != undefined &&
      userStore.searchUserEmail.email != ""
    ) {
      userStore.addFriend(
        userStore.userSearchedByEmail.email,
        userStore.loggedEmail
      );
    }
  }
}

function getAllFriends() {
  if (userStore.loggedEmail != "") {
    userStore.getFriends();
    return userStore.friends;
  }
  return [];
}
</script>

<style scoped></style>
