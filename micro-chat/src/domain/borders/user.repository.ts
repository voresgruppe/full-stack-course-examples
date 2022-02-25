import { User } from '../core/user';

export interface UserRepository {
  createUser(name: string, email: string): Promise<User>;
}
