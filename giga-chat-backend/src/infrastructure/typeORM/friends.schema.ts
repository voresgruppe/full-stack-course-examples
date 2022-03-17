import { EntitySchema } from 'typeorm';
import { Friend } from '../../core/friend.entity';

export const FriendSchema = new EntitySchema<Friend>({
  name: 'Friend',
  target: Friend,
  columns: {
    user1: {
      type: 'varchar',
      primary: true
    },
    user2: {
      type: 'varchar',
    },
  },
  relations: {},
});
