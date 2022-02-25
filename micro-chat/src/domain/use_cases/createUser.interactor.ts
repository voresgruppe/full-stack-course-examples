import { UserRepository } from '../borders/user.repository';
import { User } from '../core/user';

export class CreateUserInteractor {
  constructor(private readonly userRepository: UserRepository) {}

  public createUser(name: string, email: string): Promise<User> {
    return this.userRepository.createUser(name, email);
  }
}
