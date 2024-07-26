import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {

  constructor(@InjectRepository(Usuario)
  private readonly usuarioRepository: Repository<Usuario>){}

  create(createUsuarioDto: CreateUsuarioDto) {
    this.usuarioRepository.save(createUsuarioDto)
    return createUsuarioDto;
  }

  findAll() {
    return this.usuarioRepository.find( {relations:{auto:true, domicilio:true,rol:true, lenguaje:true}});
  }

  findOne(id: string) {
    return this.usuarioRepository.findOne({
      where: {id:id}
    });
  }

  update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    this.usuarioRepository.update({id:id}, updateUsuarioDto)
    return updateUsuarioDto;
  }

  remove(id: string) {
    this.usuarioRepository.softDelete(id)
  }
}
