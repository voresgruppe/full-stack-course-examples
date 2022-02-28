import { IUserRepository } from './borders/userRepository.interface';
import { User } from '../core/user.entity';

export class UsersService {
  constructor(private readonly userRepository: IUserRepository) {}

  create(name: string, email: string, password: string): Promise<User> {
    return this.userRepository.create(name, email, password);
  }
}
