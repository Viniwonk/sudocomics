import { EDITORA } from 'src/editora/editora.entity';
import { QUADRINHO } from 'src/quadrinho/quadrinho.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class COLECAO {
  @PrimaryColumn()
  ID: string;

  @Column()
  NOME: string;

  @Column()
  LANCAMENTO: string;

  @Column()
  FOTO: string;

  @Column('text')
  SINOPSE: string;

  @ManyToOne(() => EDITORA, (editora) => editora.colecao)
  @JoinColumn({ name: 'ID_EDITORA', referencedColumnName: 'ID' })
  editora: EDITORA;

  @OneToMany(() => QUADRINHO, (quadrinho) => quadrinho.colecao)
  quadrinho: QUADRINHO[];
}
