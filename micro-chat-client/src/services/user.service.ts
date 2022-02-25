import http from "./http.client";
import type { User } from "@/core/user";

export class UserService {
  async createUser(name: string, email: string): Promise<User> {
    const res = await http.post<User>("/users", {
      name: name,
      email: email,
    });
    return res.data;
  }
}
