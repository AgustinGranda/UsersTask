import { PartialType } from '@nestjs/mapped-types';
import { CreateLenguajePDto } from './create-lenguaje-p.dto';

export class UpdateLenguajePDto extends PartialType(CreateLenguajePDto) {}
