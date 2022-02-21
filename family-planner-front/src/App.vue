<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <CreateUser />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <p>This is a test</p>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import CreateUser from "@/components/CreateUser";

export default {
  name: "App",
  components: {
    CreateUser,
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
