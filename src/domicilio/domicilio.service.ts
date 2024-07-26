import { Injectable } from '@nestjs/common';
import { CreateDomicilioDto } from './dto/create-domicilio.dto';
import { UpdateDomicilioDto } from './dto/update-domicilio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Domicilio } from './entities/domicilio.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DomicilioService {

  constructor(@InjectRepository(Domicilio)
  private readonly domicilioRepository:Repository<Domicilio>
  ){}


  create(createDomicilioDto: CreateDomicilioDto) {
    this.domicilioRepository.save(createDomicilioDto);

    return createDomicilioDto; 
  }

  findAll() {
    return this.domicilioRepository.find()
  }

  findOne(id: string) {
    return this.domicilioRepository.findOne({
      where: {id:id}
    })
  }

  update(id: string, updateDomicilioDto: UpdateDomicilioDto) {

    this.domicilioRepository.update({id:id},updateDomicilioDto);
    return updateDomicilioDto;
  }

  remove(id: string) {
    this.domicilioRepository.softDelete(id)
  }
}
