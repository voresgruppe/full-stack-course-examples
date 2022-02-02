import { CatsRepository } from './cats.repository';
import { Cat } from './entities/cat.entity';

export class CatsRepoImpl implements CatsRepository {
  create(name: string): Cat {
    return { id: 1, name: 'Lars' };
  }
}
