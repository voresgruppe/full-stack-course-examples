import { Inject, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from '../infrastructure/typeORM/user.schema';
import { UserRepositoryAdapter } from '../infrastructure/typeORM/UserRepository.adapter';
import { CreateUserInteractor } from '../domain/use_cases/createUser.interactor';
import { UserRepository } from '../domain/borders/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  controllers: [UsersController],
  providers: [
    {
      provide: 'UserRepository',
      useClass: UserRepositoryAdapter,
    },
    {
      inject: ['UserRepository'],
      provide: 'CreateUser',
      useFactory: (userRepo: UserRepository) =>
        new CreateUserInteractor(userRepo),
    },
  ],
})
export class UsersModule {}
