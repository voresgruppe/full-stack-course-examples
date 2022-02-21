import { User } from '../../users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateChatDto {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  text: string;

  @ApiProperty()
  roomId: string;
}
