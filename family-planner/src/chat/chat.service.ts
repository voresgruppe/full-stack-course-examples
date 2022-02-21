import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Chat } from './entities/chat.entity';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Room } from '../rooms/entities/room.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private readonly chatRepository: Repository<Chat>,
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
  ) {}

  async create(createChatDto: CreateChatDto): Promise<Chat> {
    let room = new Room();
    room.id = createChatDto.roomId;
    room.name = 'Tmp Room Name';
    room.users = [];
    room = await this.roomRepository.save(room);

    const user = new User();
    user.id = createChatDto.userId;

    return this.chatRepository.save({
      room: room,
      user: user,
      text: createChatDto.text,
    });
  }

  findAll(): Promise<Chat[]> {
    return this.chatRepository.find();
  }

  findOne(id: number): Promise<Chat> {
    return this.chatRepository.findOne(id);
  }

  update(updateChatDto: UpdateChatDto): Promise<Chat> {
    return this.chatRepository.save(updateChatDto);
  }

  remove(id: number) {
    this.chatRepository
      .findOne(id)
      .then((value) => this.chatRepository.remove(value));
  }
}
