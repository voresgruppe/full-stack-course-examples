import { Inject, Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CATS_REPO, CatsRepository } from './cats.repository';

@Injectable()
export class CatsService {
  //Below the class that is associated with the CATS_REPO token is dependency injected into the catRepo (Notice that the type of the variable is the interface):
  constructor(@Inject(CATS_REPO) private readonly catRepo: CatsRepository) {}

  create(createCatDto: CreateCatDto) {
    return 'This action adds a new cat, called ' + this.catRepo.create('').name;
  }

  findAll() {
    return `This action returns all cats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
