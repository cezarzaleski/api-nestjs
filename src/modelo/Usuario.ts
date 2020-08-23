import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

@Entity({name: 'tb_usuario'})
export class Usuario {

  @ApiProperty()
  @PrimaryGeneratedColumn()
  idAutor: number;

  @ApiProperty()
  @Column({name: 'no_autor'})
  @IsNotEmpty({message: 'Nome do autor obrigatório'})
  noAutor: string;

  @ApiProperty()
  @Column({name: 'st_ativo'})
  stAtivo: number;

  @ApiProperty()
  @Column({name: 'dt_cadastro'})
  dtCadastro?: Date;

}
