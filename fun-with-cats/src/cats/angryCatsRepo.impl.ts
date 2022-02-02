import { CATS_REPO, CatsRepository } from './cats.repository';
import { Cat } from './entities/cat.entity';

export class AngryCatsRepoImpl implements CatsRepository {
  create(name: string): Cat {
    return { id: 666, name: 'Angry Cat' };
  }
}
