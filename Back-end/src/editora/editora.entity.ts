import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { QUADRINHO } from 'src/quadrinho/quadrinho.entity';
import { COLECAO } from 'src/colecao/colecao.entity';

@Entity()
export class EDITORA {
  @PrimaryColumn()
  ID: string;

  @Column({ length: 255 })
  NOME: string;

  @Column({ length: 255 })
  LOGO: string;

  @OneToMany(() => QUADRINHO, (quadrinho) => quadrinho.editora)
  quadrinho: QUADRINHO[];

  @OneToMany(() => COLECAO, (colecao) => colecao.editora)
  colecao: COLECAO[];
}
