import { Module } from '@nestjs/common';
import { AutoService } from './auto.service';
import { AutoController } from './auto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auto } from './entities/auto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Auto])],
  controllers: [AutoController],
  providers: [AutoService],
})
export class AutoModule {}
