import { ApiProperty } from '@nestjs/swagger';

export class CreateCalendarEntryDto {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  end: Date;

  @ApiProperty()
  start: Date;
}
