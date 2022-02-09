import { Injectable } from '@nestjs/common';
import { CreateCalendarEntryDto } from '../dto/create-calendarEntry.dto';
import { UpdateCalendarEntryDto } from '../dto/update-calendarEntry.dto';
import { Repository } from 'typeorm';
import { CalendarEntryEntity } from '../infrastructure/persistence/calendarEntry.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as Console from 'console';

@Injectable()
export class CalendarEntriesService {
  constructor(
    @InjectRepository(CalendarEntryEntity)
    private readonly entriesRepository: Repository<CalendarEntryEntity>,
  ) {}

  create(createEntryDto: CreateCalendarEntryDto): Promise<CalendarEntryEntity> {
    const calendarEntry: CalendarEntryEntity = this.entriesRepository.create();

    calendarEntry.end = createEntryDto.end;
    calendarEntry.start = createEntryDto.start;
    calendarEntry.userId = createEntryDto.userId;
    calendarEntry.title = createEntryDto.title;
    calendarEntry.content = createEntryDto.content;

    return this.entriesRepository.save(calendarEntry);
  }

  findAll() {
    return this.entriesRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} entry`;
  }

  update(id: number, updateEntryDto: UpdateCalendarEntryDto) {
    return `This action updates a #${id} entry`;
  }

  remove(id: number) {
    return `This action removes a #${id} entry`;
  }
}
