import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatsModule } from './chats/chats.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ChatsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database/micro-chat.db',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
