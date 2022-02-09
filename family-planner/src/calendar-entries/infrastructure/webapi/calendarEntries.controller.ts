import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CalendarEntriesService } from '../../domain/calendarEntries.service';
import { CreateCalendarEntryDto } from '../../dto/create-calendarEntry.dto';
import { UpdateCalendarEntryDto } from '../../dto/update-calendarEntry.dto';
import { CalendarEntryEntity } from '../persistence/calendarEntry.entity';

@Controller('entries')
export class CalendarEntriesController {
  constructor(private readonly entriesService: CalendarEntriesService) {}

  @Post()
  create(
    @Body() createEntryDto: CreateCalendarEntryDto,
  ): Promise<CalendarEntryEntity> {
    return this.entriesService.create(createEntryDto);
  }

  @Get()
  findAll() {
    return this.entriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entriesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEntryDto: UpdateCalendarEntryDto,
  ) {
    return this.entriesService.update(+id, updateEntryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entriesService.remove(+id);
  }
}
