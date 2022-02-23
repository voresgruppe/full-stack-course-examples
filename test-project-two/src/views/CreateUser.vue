<template>
  <h2>Fun with RESTful endpoint interactions:</h2>
  <p>{{ text }}</p>
  <input v-model="inputText" placeholder="Enter random data" />
  <button @click="youPushedMe">Push me</button>
  <p>{{ inputText }}</p>
  <p>{{ sample }}</p>
  <br />
  <button @click="getAllUsers">Get all users</button>
  <button @click="clearUserList">Clear user list</button>
  <br />
  <ul v-if="usersInMem.length > 0">
    <li v-for="(user, index) in usersInMem.values()" v-bind:key="index">
      {{ user.id + ": " + user.name }}
    </li>
  </ul>
  <br />
  <p>Create a new User:</p>
  <input v-model="newUserName" placeholder="Enter new user name" />
  <button @click="createUser">+user</button>
  <br />
  <p>Get user by id:</p>
  <input v-model="getUserId" />
  <button @click="getOneUser">Get user</button>
  <p>Found user: {{ foundUser.id + ": " + foundUser.name }}</p>
</template>

<script setup lang="ts">
import { inject, reactive, ref } from "vue";
import { UserService } from "@/services/User.Service";
import { User } from "@/models/User.Entity";

const userService: UserService = inject<UserService>(
  "UserService"
) as UserService;

const text = ref("");
const inputText = ref("");
const sample = ref("");
const usersInMem = ref<User[]>([]);
const newUserName = ref("");
const getUserId = ref<number>(0);
const foundUser: User = reactive({ id: -1, name: "" });

function getAllUsers() {
  userService
    .getAllUsers()
    .then((users) => {
      clearUserList();
      users.map((user) => {
        usersInMem.value.push(user);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function getOneUser() {
  userService
    .getOneUser(getUserId.value)
    .then((user) => {
      foundUser.name = user.name;
      foundUser.id = user.id;
    })
    .catch((err) => {
      console.log(err);
    });
}

function createUser() {
  userService
    .createUser(newUserName.value)
    .then((user) => {
      usersInMem.value.push(user);
    })
    .catch((err) => console.log(err));
}

function clearUserList() {
  usersInMem.value = [];
}

function youPushedMe() {
  sample.value = inputText.value.toUpperCase();
}
</script>

<style scoped></style>
