import { IFriendRepository } from '../../domain/borders/friendRepository.interface';
import { Friend } from '../../core/friend.entity';
import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { FriendSchema } from './friends.schema';

@Injectable()
export class FriendRepositoryAdapter implements IFriendRepository {
  private readonly FriendRepo: Repository<Friend>;

  constructor(private readonly em: EntityManager) {
    this.FriendRepo = em.getRepository(FriendSchema);
  }

  create(user1: string, user2: string): Promise<Friend> {
    return this.FriendRepo.save({ user1: user1, user2: user2 });
  }

  findAll(): Promise<Friend[]> {
    return this.FriendRepo.find();
  }

  findAllFriendsOf(user: string): Promise<Friend[]> {
    return this.FriendRepo.find({
      where: [{ user1: user }, { user2: user }],
    });
  }
}
