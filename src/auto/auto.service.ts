import { Injectable } from '@nestjs/common';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Auto } from './entities/auto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AutoService {

  constructor(@InjectRepository(Auto)
  private readonly autoRepository:Repository<Auto>
  ){}

  create(createAutoDto: CreateAutoDto) {
    this.autoRepository.save(createAutoDto)
    return createAutoDto; 
  }

  findAll() {
    return this.autoRepository.find()
  }

  async findOne(id: string) {
    const autoToReturn = await this.autoRepository.findOne({
      where: {id:id}
    })
    return autoToReturn
  }

  update(id: string, updateAutoDto: UpdateAutoDto) {
    this.autoRepository.update({id:id}, updateAutoDto)
    return updateAutoDto;
  }

  remove(id: string) {
    this.autoRepository.softDelete(id)
  }
}
