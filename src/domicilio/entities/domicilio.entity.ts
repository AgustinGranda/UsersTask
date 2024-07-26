import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('domicilio')
export class Domicilio {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column('text')
    pais:string

    @Column('text')
    provincia:string

    @Column('text')
    localidad:string

    @Column('text')
    direccion:string

    @CreateDateColumn()
    created_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;

    @OneToMany(()=>Usuario, usuario => usuario.domicilio)
    usuario:Usuario;

}
