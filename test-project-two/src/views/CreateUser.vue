<template>
  <p>{{ text }}</p>
  <input v-model="inputText" />
  <br />
  <button @click="youPushedMe">Push me</button>
  <p>{{ inputText }}</p>
  <p>{{ sample }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue";

const text = ref("Hello class");
const inputText = ref("");
const sample = ref("");

inputText.value = "Input your text";

function youPushedMe() {
  sample.value = inputText.value.toUpperCase();
}
</script>

<style scoped></style>
