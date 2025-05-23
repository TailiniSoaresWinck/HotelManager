import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user-level.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserLevelService } from './user-level.service';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        private readonly userLevelService: UserLevelService,
    ) { }

    async create(createUserDto: CreateUserDto) {
        const user_level_id = await this.userLevelService.findOne(createUserDto.user_level_id);
        const newUser = {
            user_level_id,
            name: createUserDto.name,
            email: createUserDto.email,
            password: createUserDto.password
        }
        const user = await this.userRepository.create(newUser);
        await this.userRepository.save(newUser);
        return {
            ...user,
            level: {
                level: user.user_level_id.level
            }
        };
    }

    async findAll() {

    }

    async findOne(id: number) {

    }

    async update(id: number, updateUserDto: UpdateUserDto) {

    }

    async remove(id: number) {

    }
}
