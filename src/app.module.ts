import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORM } from './config/typeORM';
import { UsuarioModule } from './usuario/usuario.module';
import { AutoModule } from './auto/auto.module';
import { RolModule } from './rol/rol.module';
import { LenguajePModule } from './lenguaje/lenguaje-p.module';
import { DomicilioModule } from './domicilio/domicilio.module';
import { LoginModule } from './login/login.module';


@Module({
  imports: [TypeOrmModule.forRoot(typeORM()), UsuarioModule, AutoModule, RolModule, LenguajePModule, DomicilioModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
