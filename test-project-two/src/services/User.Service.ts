import axios from "axios";
import { User } from "@/models/User.Entity";

export class UserService {
  private http = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*", //Here we are bypassing CORS until we cover it later in class
    },
  });

  async getAllUsers(): Promise<User[]> {
    const res = await this.http.get<User[]>("/users");
    return res.data;
  }

  async getOneUser(id: number): Promise<User> {
    const res = await this.http.get<User>("/users/" + id);
    return res.data;
  }

  async createUser(name: string): Promise<User> {
    const res = await this.http.post<User>("/users", { name: name });
    return res.data;
  }
}
