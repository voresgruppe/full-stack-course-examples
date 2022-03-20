import { IUserRepository } from '../../domain/borders/userRepository.interface';
import { User } from '../../core/user.entity';
import { EntityManager, Like, Repository } from 'typeorm';
import { UserSchema } from './user.schema';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepositoryAdapter implements IUserRepository {
  private readonly userRepo: Repository<User>;

  constructor(private readonly em: EntityManager) {
    this.userRepo = em.getRepository(UserSchema);
  }

  create(name: string, email: string, password: string): Promise<User> {
    return this.userRepo.save({ name: name, email: email, password: password });
  }

  emailIsNotInDatabase(email: string): boolean {
    if (this.userRepo.findOne({ where: { email: email } })) {
      throw new Error('user exists');
    }
    return true;
  }

  getUser(email: string, password: string): Promise<User> {
    return this.userRepo.findOne({
      where: {
        email: email,
        password: password,
      },
    });
  }

  findByEmail(email: string): Promise<User> {
    return this.userRepo.findOne({
      where: {
        email: email,
      },
    });
  }

  findByName(nameSearch: string): Promise<User[]> {
    return this.userRepo.find({
      name: Like(`%${nameSearch}%`),
    });
  }

  findAll(): Promise<User[]> {
    return this.userRepo.find();
  }
}
