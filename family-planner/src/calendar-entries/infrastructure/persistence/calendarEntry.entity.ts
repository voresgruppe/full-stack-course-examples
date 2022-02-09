import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CalendarEntryEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userId: number;
  @Column()
  title: string;
  @Column()
  content: string;
  @Column()
  start: Date;
  @Column()
  end: Date;
}
