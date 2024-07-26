import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([Usuario]),
  JwtModule.register({
    secret: 'tu-secreto',
  }),],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
