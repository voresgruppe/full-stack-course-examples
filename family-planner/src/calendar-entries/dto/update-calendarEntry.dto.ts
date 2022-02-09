import { PartialType } from '@nestjs/mapped-types';
import { CreateCalendarEntryDto } from './create-calendarEntry.dto';

export class UpdateCalendarEntryDto extends PartialType(
  CreateCalendarEntryDto,
) {}
