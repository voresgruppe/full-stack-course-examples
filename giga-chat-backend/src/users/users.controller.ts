import { Controller, Post, Body, Inject, Get, Param } from '@nestjs/common';
import { UsersService } from '../domain/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../core/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { FriendService } from 'src/domain/friends.service';
import { Friend } from '../core/friend.entity';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('UsersService') private readonly usersService: UsersService,
    @Inject('FriendService') private readonly FriendService: FriendService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(
      createUserDto.name,
      createUserDto.email,
      createUserDto.password,
    );
  }

  @Post('/login')
  login(@Body() loginUser: LoginUserDto): Promise<User> {
    return this.usersService.login(loginUser.email, loginUser.password);
  }

  @Get('/email/:email')
  findByEmail(@Param('email') email: string): Promise<User> {
    return this.usersService.findOneByEmail(email);
  }

  @Get(':name')
  findByName(@Param('name') name: string): Promise<User[]> {
    return this.usersService.findByName(name);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post('/af')
  addFriend(@Param('user1') user1: string, @Param('user2') user2: string) {
    return this.FriendService.create(user1, user2);
  }

  @Get('/friends/:user')
  findAllFriends(@Param('user') user: string): Promise<Friend[]> {
    return this.FriendService.findAllFriendsOf(user);
  }
}
