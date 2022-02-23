import axios from "axios";
import { User } from "@/models/User.Entity";

export class UserService {
  http = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  getAllUsers() {
    return this.http.get("/users");
  }
}
