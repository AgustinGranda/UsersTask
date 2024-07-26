import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('auto')
export class Auto {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column('text')
    marca:string

    @Column('text')
    modelo:string

    @Column('text')
    color:string

    @Column('text')
    patente:string;

    @CreateDateColumn()
    created_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;

    @ManyToOne(()=> Usuario, usuario => usuario.auto)
    usuario:Usuario;
}

