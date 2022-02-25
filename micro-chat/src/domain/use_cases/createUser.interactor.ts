import { UserRepository } from '../borders/user.repository';
import { User } from '../core/user';

export class CreateUserInteractor {
  constructor(private readonly userRepository: UserRepository) {}

  public createUser(name: string): Promise<User> {
    console.log(this.userRepository);
    return this.userRepository.createUser(name);
  }
}
