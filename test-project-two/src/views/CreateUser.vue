<template>
  <p>{{ text }}</p>
  <input v-model="inputText" />
  <br />
  <button @click="getAllUsers">Get all users</button>
  <button @click="youPushedMe">Push me</button>
  <p>{{ inputText }}</p>
  <p>{{ sample }}</p>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";
import { UserService } from "@/services/User.Service";
import { User } from "@/models/User.Entity";

const userService: UserService = inject<UserService>(
  "UserService"
) as UserService;

const text = ref("Hello class");
const inputText = ref("");
const sample = ref("");

inputText.value = "Input your text";

function getAllUsers() {
  userService
    .getAllUsers()
    .then((response) => {
      let users = response.data as User[];
      users.map((user) => {
        console.log(user.id + ": " + user.name);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function youPushedMe() {
  sample.value = inputText.value.toUpperCase();
}
</script>

<style scoped></style>
