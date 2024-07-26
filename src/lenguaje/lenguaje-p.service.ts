import { Injectable } from '@nestjs/common';
import { CreateLenguajePDto } from './dto/create-lenguaje-p.dto';
import { UpdateLenguajePDto } from './dto/update-lenguaje-p.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LenguajeP } from './entities/lenguaje-p.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LenguajePService {


  constructor(@InjectRepository(LenguajeP)
    private readonly lenguajeRepository: Repository<LenguajeP>){}

  create(createLenguajePDto: CreateLenguajePDto) {
    this.lenguajeRepository.save(createLenguajePDto);
    return createLenguajePDto;
  }

  findAll() {
    return this.lenguajeRepository.find()
  }

  findOne(id: string) {
    return this.lenguajeRepository.findOne({
      where: {id:id}
    })
  }

  update(id: string, updateLenguajePDto: UpdateLenguajePDto) {
    this.lenguajeRepository.update({id:id},updateLenguajePDto)
    return updateLenguajePDto;
  }

  remove(id: string) {
    this.lenguajeRepository.softDelete(id)
  }
}
