import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LenguajePService } from './lenguaje-p.service';
import { CreateLenguajePDto } from './dto/create-lenguaje-p.dto';
import { UpdateLenguajePDto } from './dto/update-lenguaje-p.dto';

@Controller('lenguaje')
export class LenguajePController {
  constructor(private readonly lenguajePService: LenguajePService) {}

  @Post()
  create(@Body() createLenguajePDto: CreateLenguajePDto) {
    return this.lenguajePService.create(createLenguajePDto);
  }

  @Get()
  findAll() {
    return this.lenguajePService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lenguajePService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLenguajePDto: UpdateLenguajePDto) {
    return this.lenguajePService.update(id, updateLenguajePDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lenguajePService.remove(id);
  }
}
