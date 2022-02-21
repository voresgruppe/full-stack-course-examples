import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  JoinTable,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Chat } from '../../chat/entities/chat.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @OneToMany(() => Chat, (chat) => chat.room)
  chats: Chat[];
  @ManyToMany(() => User, (user) => user.rooms)
  @JoinTable()
  users: User[];
}
