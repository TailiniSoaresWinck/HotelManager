import { ConflictException, Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hotel } from './entities/hotel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HotelService {
  constructor(@InjectRepository(Hotel) private readonly hotelRepository: Repository<Hotel>) { }

  async create(createHotelDto: CreateHotelDto) {
    try {
      const data = {
        name: createHotelDto.name,
        cnpj: createHotelDto.cnpj,
        address: createHotelDto.address
      }
      const hotel = this.hotelRepository.create(data);
      await this.hotelRepository.save(hotel);
      return hotel;
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        throw new ConflictException('CNPJ já está cadastrado.');
      }
      throw error;
    }

  }

  async findAll() {
    const hotels = await this.hotelRepository.find();
    if (!hotels) {
      throw new ConflictException('Não possuí hotéis cadastrados');
    }
    return hotels;
  }

  async findOne(id: number) {
    const hotel = await this.hotelRepository.findOne({
      where: {
        id
      }
    });
    if (!hotel) throw new ConflictException('Hotel não encontrado');
    return hotel;
  }

  async update(id: number, updateHotelDto: UpdateHotelDto) {
    const hotel = await this.findOne(id);
    if (hotel) {
      hotel.name = updateHotelDto?.name ?? hotel.name;
      hotel.address = updateHotelDto?.address ?? hotel.address;

      await this.hotelRepository.save(hotel);
      return hotel;
    }
  }

  async remove(id: number) {
    const hotel = await this.findOne(id);
    if(hotel){
      hotel.active = false;
      await this.hotelRepository.save(hotel);
      await this.hotelRepository.softRemove({id: id});
      return hotel;
    }
  }
}
