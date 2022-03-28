import { Inject, Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './entities/profile.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProfilesService {
  constructor(@Inject('PROFILE_MODEL') private profileModel: Model<Profile>) {}

  create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const profile = new this.profileModel(createProfileDto);
    return profile.save();
  }

  findAll() {
    return this.profileModel.find().exec();
  }
}
