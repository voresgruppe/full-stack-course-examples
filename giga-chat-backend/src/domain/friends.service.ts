import { Friend } from 'src/core/friend.entity';
import { IFriendRepository } from './borders/friendRepository.interface';

export class FriendService {
  constructor(private readonly friendRepository: IFriendRepository) {}

  async create(user1: string, user2: string): Promise<Friend> {
    if (
      (await this.friendRepository.getFriendContractOfFriends(user1, user2)) ==
      null
    ) {
      return this.friendRepository.create(user1, user2);
    } else {
      const acceptContract = this.friendRepository.getFriendContractOfFriends(
        user1,
        user2,
      );
      return this.friendRepository.acceptFriendRequest(await acceptContract);
    }
  }

  findAllFriendsOf(user: string): Promise<Friend[]> {
    return this.friendRepository.findAllFriendsOf(user);
  }

  findAll(): Promise<Friend[]> {
    return this.friendRepository.findAll();
  }
}
