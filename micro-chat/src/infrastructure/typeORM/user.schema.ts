import { EntitySchema } from 'typeorm';
import { User } from '../../domain/core/user';

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    uuid: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    name: {
      type: 'varchar',
    },
    email: {
      type: 'varchar',
    },
  },
  relations: {},
});
