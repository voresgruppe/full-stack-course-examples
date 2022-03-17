import { Friend } from "src/core/friend.entity";
import { IFriendRepository } from "./borders/friendRepository.interface";

export class FriendService {
    constructor(private readonly friendRepository: IFriendRepository) { }

    create(user1: string, user2: string): Promise<Friend> {
        return this.friendRepository.create(user1, user2);
    }


    findAllFriendsOf(user: string): Promise<Friend[]> {
        return this.friendRepository.findAllFriendsOf(user);
    }

    findAll(): Promise<Friend[]> {
        return this.friendRepository.findAll();
    }
}
