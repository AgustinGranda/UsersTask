import { IsNumber, IsString, IsUUID } from "class-validator";
import { Auto } from "src/auto/entities/auto.entity";
import { Domicilio } from "src/domicilio/entities/domicilio.entity";
import { LenguajeP } from "src/lenguaje/entities/lenguaje-p.entity";
import { Rol } from "src/rol/entities/rol.entity";

export class CreateUsuarioDto {


    @IsString()
    nombre:string;

    @IsString()
    apellido:string;

    @IsNumber()
    dni:number;

    @IsUUID()
    rol:Rol;

    @IsUUID()
    lenguaje:LenguajeP;

    @IsUUID()
    domicilio:Domicilio;

    @IsUUID()
    auto:Auto;


}
