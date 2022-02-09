import { Controller, Get } from '@nestjs/common';
import { Chat } from './entities/chat.entity';
import { ChatsService } from './chats.service';

@Controller('chats')
export class ChatsController {
  constructor(private readonly chatService: ChatsService) {}

  @Get()
  getAll(): Promise<Chat[]> {
    return this.chatService.findAll();
  }
}
