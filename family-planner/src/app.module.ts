import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CalendarEntriesModule } from './calendar-entries/calendarEntries.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatModule } from './chat/chat.module';
import { Repository } from 'typeorm';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [
    UsersModule,
    CalendarEntriesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database/family-planner.db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ChatModule,
    RoomsModule,
  ],
  controllers: [],
})
export class AppModule {}
