import { IUserRepository } from './borders/userRepository.interface';
import { User } from '../core/user.entity';

export class UsersService {
  constructor(private readonly userRepository: IUserRepository) { }

  create(name: string, email: string, password: string): Promise<User> {
    return this.userRepository.create(name, email, password);
  }

  login(email: string, password: string): Promise<User> {
    return this.userRepository.getUser(email, password);
  }

  findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findByEmail(email);
  }

  findByName(name: string): Promise<User[]> {
    return this.userRepository.findByName(name);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
