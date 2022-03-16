import { Friend } from '../../core/friend.entity';

export interface IFriendRepository {
  create(user1: string, user2: string): Promise<Friend>;

  findAllFriendsOf(user: string): Promise<Friend[]>;

  findAll(): Promise<Friend[]>;
}
