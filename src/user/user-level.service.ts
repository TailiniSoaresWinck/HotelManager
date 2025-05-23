import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserLevel } from './entities/user-level.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserLevelService {
  constructor(@InjectRepository(UserLevel) private readonly userLevelRepository: Repository<UserLevel>) { }

  async findAll() {
    const userlevel = await this.userLevelRepository.find()
    if (!userlevel) {
      throw new ConflictException('Não possuí niveis cadastrados');
    }
    return userlevel;
  }

  async findOne(id: number) {
    const userlevel = await this.userLevelRepository.findOne({
      where: {
        id
      }
    });
    if (!userlevel) throw new ConflictException('Nivel não encontrado');
    return userlevel;
  }
}
