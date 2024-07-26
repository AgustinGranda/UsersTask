import { IsString } from "class-validator";

export class CreateDomicilioDto {

    @IsString()
    pais:string;

    @IsString()
    provincia:string;

    @IsString()
    localidad:string;

    @IsString()
    direccion:string;
}
