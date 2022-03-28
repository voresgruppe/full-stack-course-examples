import { ProfileSchema } from './profile.schema';
import { Connection } from 'mongoose';

export const ProfileProvider = [
  {
    provide: 'PROFILE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Profile', ProfileSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
