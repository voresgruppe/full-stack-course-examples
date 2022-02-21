import apiClient from "./http-service";
import User from "../models/User";

class UserService {

    async create(data): Promise<User> {
      return await apiClient.post("/users", data);
    }
}

export default new UserService();