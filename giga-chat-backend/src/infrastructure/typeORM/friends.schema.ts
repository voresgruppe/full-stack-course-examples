import { EntitySchema } from 'typeorm';
import { Friend } from '../../core/friend.entity';

export const friendsSchema = new EntitySchema<Friend>({
  name: 'Friend',
  target: Friend,
  columns: {
    user: {
      type: 'varchar',
    },
    friend: {
      type: 'varchar',
    },
  },
  relations: {},
});
