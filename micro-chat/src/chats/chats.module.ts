import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsGateway } from './chats.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './entities/chat.entity';
import { ChatsController } from './chats.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Chat])],
  providers: [ChatsGateway, ChatsService],
  controllers: [ChatsController],
})
export class ChatsModule {}
