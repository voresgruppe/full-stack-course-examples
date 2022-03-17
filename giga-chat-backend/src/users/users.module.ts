import { Module } from '@nestjs/common';
import { UsersService } from '../domain/users.service';
import { UsersController } from './users.controller';
import { UserRepositoryAdapter } from '../infrastructure/typeORM/userRepository.adapter';
import { IUserRepository } from '../domain/borders/userRepository.interface';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from '../infrastructure/typeORM/user.schema';
import { IFriendRepository } from 'src/domain/borders/friendRepository.interface';
import { FriendService } from 'src/domain/friends.service';
import { FriendRepositoryAdapter } from 'src/infrastructure/typeORM/friendRepository.adapter';
import { FriendSchema } from 'src/infrastructure/typeORM/friends.schema';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema, FriendSchema])],
  controllers: [UsersController],
  providers: [
    {
      provide: 'UserRepository',
      useClass: UserRepositoryAdapter,
    },
    {
      provide: 'FriendRepository',
      useClass: FriendRepositoryAdapter
    },
    {
      inject: ['UserRepository'],
      provide: 'UsersService',
      useFactory: (userRepo: IUserRepository) => new UsersService(userRepo),
    },
    {
      inject: ['FriendRepository'],
      provide: 'FriendService',
      useFactory: (friendRepo: IFriendRepository) => new FriendService(friendRepo)
    },
  ],
})
export class UsersModule {}
