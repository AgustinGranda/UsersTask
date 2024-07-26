import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    private readonly jwtService: JwtService,
  ) {}

  async createJWT(loginDto: LoginDto) {
    const user = await this.usuarioRepository.findOne({where:{nombre : loginDto.nombre}});
    const token = this.jwtService.sign(user, { expiresIn: 20 });

    return {
      token: token,
    };
  }

  async verifyToken(token: string) {
    try {
      await this.jwtService.verify(token);
      return true
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
