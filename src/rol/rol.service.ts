import { Injectable } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from './entities/rol.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolService {

  constructor(@InjectRepository(Rol)
    private readonly rolRepository:Repository<Rol>){}


  create(createRolDto: CreateRolDto) {
    this.rolRepository.save(createRolDto);
    return createRolDto;
  }

  findAll() {
    return this.rolRepository.find();
  }

  findOne(id: string) {
    return this.rolRepository.findOne({
      where: { id: id },
    });
  }

  update(id: string, updateRolDto: UpdateRolDto) {
    this.rolRepository.update({id:id}, updateRolDto)
    return updateRolDto;
    
  }

  remove(id: string) {
    this.rolRepository.softDelete(id)
    return(`rol ${id} eliminado`); 
  }
}
