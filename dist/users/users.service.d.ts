import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Profile } from './entities/profile.entity';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    private profilesRepository;
    constructor(usersRepository: Repository<User>, profilesRepository: Repository<Profile>);
    create(createUserDto: CreateUserDto): User;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
