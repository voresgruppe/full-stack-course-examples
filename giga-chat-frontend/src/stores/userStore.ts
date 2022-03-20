import { defineStore } from "pinia";
import type { User } from "@/models/User";
import { UserService } from "@/services/user.service";
import type { UnwrapRef } from "vue";

const userService: UserService = new UserService();

export const UserStore = defineStore({
  id: "userStore",
  state: () => ({
    loggedInUser: { name: "", email: "" } as User,
    searchUsers: [{ name: "", email: "" }] as User[],
    allUsers: [{ name: "", email: "" }] as User[],
    searchUserEmail: { name: "", email: "" } as User,
    friends: [{ name: "", email: "" }] as User[],
  }),
  getters: {
    friends: (state) => {
      if (state.friends != undefined) return state.friends;
      else {
        const users: Array<User> = [];
        return users;
      }
    },
    userName: (state) => {
      if (state.loggedInUser.name != undefined) return state.loggedInUser.name;
      else return "";
    },
    loggedEmail: (state) => {
      if (state.loggedInUser.email != undefined)
        return state.loggedInUser.email;
      else return "";
    },
    usersAll: (state) => {
      if (state.allUsers != undefined) return state.allUsers;
      else {
        const users: Array<User> = [];
        return users;
      }
    },
    usersSearch: (state) => {
      if (state.searchUsers != undefined) return state.searchUsers;
      else {
        const users: Array<User> = [];
        return users;
      }
    },
    userSearchedByEmail: (state) => {
      if (state.searchUserEmail != undefined) return state.searchUserEmail;
      return { name: "", email: "" } as User;
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
      userService
        .searchEmail(email)
        .then((user) => (this.searchUserEmail = user))
        .catch((err) => console.log(err));
    },
    searchName(name: string) {
      userService
        .searchName(name)
        .then((users) => (this.searchUsers = users))
        .catch((err) => console.log(err));
    },
    getAll() {
      userService
        .getAll()
        .then((users) => (this.allUsers = users))
        .catch((err) => console.log(err));
    },
    addFriend(user1: string, user2: string) {
      userService
        .addFriend(user1, user2)
        .then((user) => console.log(user))
        .catch((err) => console.log(err));
    },
    getFriends() {
      userService
        .getFriends(this.loggedInUser.email)
        .then((user) => (this.friends = user))
        .catch((err) => console.log(err));
    },
  },
});
