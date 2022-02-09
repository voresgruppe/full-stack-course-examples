import { Controller, Get } from '@nestjs/common';
import { Chat } from './entities/chat.entity';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Get()
  getAll(): Promise<Chat[]> {
    return this.chatService.findAll();
  }
}
