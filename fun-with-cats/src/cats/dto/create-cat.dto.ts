import { ApiProperty, ApiBody } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty()
  name: string;
}
