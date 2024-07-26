import { Module } from '@nestjs/common';
import { LenguajePService } from './lenguaje-p.service';
import { LenguajePController } from './lenguaje-p.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LenguajeP } from './entities/lenguaje-p.entity';

@Module({
  imports:[TypeOrmModule.forFeature([LenguajeP])],
  controllers: [LenguajePController],
  providers: [LenguajePService],
})
export class LenguajePModule {}
