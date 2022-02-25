import { defineStore } from "pinia";
import type { User } from "@/core/user";

export const UserStore = defineStore({
  id: "UserStore",
  state: () => {
    return {
      loggedInUser: {} as User,
    };
  },
});
