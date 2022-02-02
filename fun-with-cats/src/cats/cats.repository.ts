import { Cat } from './entities/cat.entity';

export const CATS_REPO = 'CATS_REPO'; //This is just a token we use to reference the interface

export interface CatsRepository {
  create(name: string): Cat;
}
