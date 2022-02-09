import { CalendarEntry } from '../../model/calendarEntry.model';
import { CreateCalendarEntryDto } from '../../dto/create-calendarEntry.dto';
import { UpdateCalendarEntryDto } from '../../dto/update-calendarEntry.dto';
import { CalendarEntryEntity } from './calendarEntry.entity';

export class CalendarEntriesRepository {
  private entries: CalendarEntry[] = [];

  create(createEntryDTO: CreateCalendarEntryDto): CalendarEntry {
    const entry = {
      id: 1,
      start: createEntryDTO.start,
      end: createEntryDTO.end,
      content: createEntryDTO.content,
      title: createEntryDTO.title,
      userId: createEntryDTO.userId,
    };
    this.entries.push(entry);
    return entry;
  }

  find(): Promise<CalendarEntry[]> {
    const calendarEntries = this.entries;
    return new Promise<CalendarEntry[]>(() => calendarEntries);
  }

  findOne(id: number): CalendarEntry {
    return this.entries.find((value) => value.id === id);
  }

  update(id: number, updateEntryDto: UpdateCalendarEntryDto): CalendarEntry {
    const calendarEntry = this.entries.find((value) => value.id === id);
    calendarEntry.start = updateEntryDto.start;
    calendarEntry.end = updateEntryDto.end;
    calendarEntry.content = updateEntryDto.content;
    calendarEntry.title = updateEntryDto.title;
    return calendarEntry;
  }

  remove(id: number) {
    this.entries = this.entries.filter((value) => value.id != id);
  }
}
