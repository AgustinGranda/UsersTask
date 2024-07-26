import { Auto } from "src/auto/entities/auto.entity";
import { Domicilio } from "src/domicilio/entities/domicilio.entity";
import { LenguajeP } from "src/lenguaje/entities/lenguaje-p.entity";
import { Rol } from "src/rol/entities/rol.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Usuario')
export class Usuario {

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column('text')
    nombre:string

    @Column('text')
    apellido:string

    @Column('int')
    dni:number

    @CreateDateColumn()
    created_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;

    @ManyToOne(()=> Rol, rol =>rol.usuario)
    rol:Rol

    @ManyToOne(()=> LenguajeP, lenguaje => lenguaje.usuario)
    lenguaje: LenguajeP

    @ManyToOne(()=>Domicilio, domicilio => domicilio.usuario)
    domicilio:Domicilio

    @OneToMany(() => Auto, auto => auto.usuario)
    auto:Auto;
}
