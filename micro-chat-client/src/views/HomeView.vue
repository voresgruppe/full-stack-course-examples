<script setup lang="ts">
import { onMounted } from "vue";
import { UserStore } from "../stores/user";
import router from "@/router";

onMounted(() => {
  console.log("Mounted");
  const userStore = UserStore();

  if (userStore.loggedInUser.uuid == undefined) {
    router.push("/CreateUser");
  } else {
    //Goto chat
  }
});
</script>
