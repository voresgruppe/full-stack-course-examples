import { UserRepository } from '../../domain/borders/user.repository';
import { UserSchema } from './user.schema';
import { EntityManager, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { User } from '../../domain/core/user';

@Injectable()
export class UserRepositoryAdapter implements UserRepository {
  private userRepo: Repository<User>;

  constructor(private readonly em: EntityManager) {
    this.userRepo = em.getRepository(UserSchema);
  }

  createUser(name: string, email: string): Promise<User> {
    return this.userRepo.save({ name: name, email: email });
  }
}
