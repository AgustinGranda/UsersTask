import { IsString, IsUUID } from "class-validator";
import { Usuario } from "src/usuario/entities/usuario.entity";

export class CreateAutoDto {

    @IsString()
    marca:string;

    @IsString()
    modelo:string;

    @IsString()
    color:string;

    @IsString()
    patente:string;

    @IsUUID()
    usuario: Usuario;
}
