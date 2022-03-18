import { EntitySchema } from 'typeorm';
import { Friend } from '../../core/friend.entity';

export const FriendSchema = new EntitySchema<Friend>({
  name: 'Friend',
  target: Friend,
  columns: {
    id: {
      type: 'int',
      generated: 'increment',
      primary: true,
    },
    user1: {
      type: 'varchar',
    },
    user2: {
      type: 'varchar',
    },
    accepted: {
      type: 'boolean',
    },
  },
  relations: {},
});
