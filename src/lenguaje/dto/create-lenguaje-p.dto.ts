import { IsString } from "class-validator";

export class CreateLenguajePDto {
    
    @IsString()
    descripcion:string;
}
