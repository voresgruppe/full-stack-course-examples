import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CalendarEntryEntity } from '../calendar-entries/infrastructure/persistence/calendarEntry.entity';
import { Chat } from './entities/chat.entity';
import { Repository } from 'typeorm';
import { options } from 'tsconfig-paths/lib/options';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private readonly chatRepository: Repository<Chat>,
  ) {}

  create(createChatDto: CreateChatDto): Promise<Chat> {
    return this.chatRepository.save(createChatDto);
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
