import { defineStore } from "pinia";
import type { User } from "@/models/User";
import { UserService } from "@/services/user.service";
import type { UnwrapRef } from "vue";

const userService: UserService = new UserService();

export const UserStore = defineStore({
  id: "userStore",
  state: () => ({
    loggedInUser: { name: "" } as User,
    allUsers: [] as User[],
  }),
  getters: {
    userName: (state) => {
      if (state.loggedInUser.name != undefined) return state.loggedInUser.name;
      else return "";
    },
    allUsers: (state) => {
      if (state.allUsers != undefined) return state.allUsers as User[];
      else return "";
    },
  },
  actions: {
    createUser(name: string, email: string, password: string) {
      userService
        .createUser(name, email, password)
        .then((user) => (this.loggedInUser = user))
        .catch((err) => console.log(err));
    },
    login(email: string, password: string) {
      userService
        .login(email, password)
        .then((user) => (this.loggedInUser = user))
        .catch((err) => console.log(err));
    },
    searchEmail(email: string) {
      userService.searchEmail(email).catch((err) => console.log(err));
    },
    searchName(name: string) {
      userService.searchName(name).catch((err) => console.log(err));
    },
    getAll() {
      userService
        .getAll()
        .then((users) => (this.allUsers = users))
        .catch((err) => console.log(err));
    },
  },
});
