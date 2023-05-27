import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Profile } from './entities/profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {


  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Profile)
    private profilesRepository: Repository<Profile>,
  ) { }

  create(createUserDto: CreateUserDto) {
    const profile = new Profile()

    if (createUserDto.fullName || createUserDto.address || createUserDto.receiveEmails) {

      profile.address = createUserDto.address;
      profile.receiveEmails = createUserDto.receiveEmails;
      profile.fullName = createUserDto.fullName;

      this.profilesRepository.save(profile);
    }


    const user = new User()
    user.username = createUserDto.username
    user.password = createUserDto.password;

    if (profile.address) {
      user.profile = profile;
    }

    this.usersRepository.save(user);

    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
