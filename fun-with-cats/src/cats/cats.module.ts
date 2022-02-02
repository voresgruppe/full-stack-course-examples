import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { CatsRepoImpl } from './catsRepo.impl';
import { CATS_REPO } from './cats.repository';
import { AngryCatsRepoImpl } from './angryCatsRepo.impl';

@Module({
  controllers: [CatsController],
  providers: [CatsService, { provide: CATS_REPO, useClass: AngryCatsRepoImpl }], //This is where you define your dependency
})
export class CatsModule {}
