import { defineStore } from "pinia";
import type { User } from "@/core/user";
import { UserService } from "@/services/user.service";

const userService = new UserService();

export const UserStore = defineStore({
  id: "UserStore",
  state: () => {
    return {
      loggedInUser: {
        name: "",
        email: "",
        uuid: "",
      } as User,
      isLoggedIn: false,
    };
  },
  getters: {
    userName: (state) => {
      return state.loggedInUser.name;
    },
  },
  actions: {
    create(name: string, email: string) {
      userService.createUser(name, email).then((user) => {
        console.log(user);
        this.loggedInUser = user;
        this.isLoggedIn = true;
      });
    },
    logIn(user: User) {
      this.loggedInUser = user;
      this.isLoggedIn = true;
    },
    logOut() {
      this.loggedInUser = {} as User;
      this.isLoggedIn = false;
    },
  },
});
