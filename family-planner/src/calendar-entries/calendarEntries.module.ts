import { Module } from '@nestjs/common';
import { CalendarEntriesService } from './domain/calendarEntries.service';
import { CalendarEntriesController } from './infrastructure/webapi/calendarEntries.controller';
import { CalendarEntriesRepository } from './infrastructure/persistence/calendarEntries.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarEntryEntity } from './infrastructure/persistence/calendarEntry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CalendarEntryEntity])],
  controllers: [CalendarEntriesController],
  providers: [CalendarEntriesService],
  exports: [],
})
export class CalendarEntriesModule {}
