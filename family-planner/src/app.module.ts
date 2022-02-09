import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CalendarEntriesModule } from './calendar-entries/calendarEntries.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatModule } from './chat/chat.module';
import { Repository } from 'typeorm';

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
  ],
  controllers: [],
})
export class AppModule {}
