import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  user: string;
  @Column()
  message: string;
  @Column()
  room: string;
}
