import { Controller, Post, Body, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserInteractor } from '../domain/use_cases/createUser.interactor';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('CreateUser') private readonly createUser: CreateUserInteractor,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUser.createUser(createUserDto.name);
  }
}
