import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatsModule } from './chats/chats.module';
import { ProfilesModule } from './profiles/profiles.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database/giga.db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    ChatsModule,
    ProfilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
