import http from "./http.client";
import type { User } from "@/models/User";

export class UserService {
  async createUser(name: string, email: string, password: string) {
    const res = await http.post<User>("/users", {
      name: name,
      email: email,
      password: password,
    });
    return res.data;
  }
  async login(email: string, password: string): Promise<User> {
    console.log(email + " og" + password);
    const res = await http.post("/users/login", {
      email: email,
      password: password,
    });
    return res.data;
  }

  async searchEmail(email: string): Promise<User[]> {
    const res = await http.get<User[]>("/users/" + email);
    return res.data;
  }

  async searchName(name: string): Promise<User[]> {
    const res = await http.get<User[]>("/users/" + name);
    return res.data;
  }

  async getAll(): Promise<User[]> {
    const res = await http.get<User[]>("/users/");
    return res.data;
  }

  async addFriend(user1: string, user2: string): Promise<User> {
    console.log(`${user1} && ${user2}`);

    const res = await http.post("/users/af", {
      user1: user1,
      user2: user2,
    });
    return res.data;
  }
}
