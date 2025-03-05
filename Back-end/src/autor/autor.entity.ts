import { QUADRINHO } from 'src/quadrinho/quadrinho.entity';
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class AUTOR {
  @PrimaryColumn()
  ID: string;

  @Column({ length: 255 })
  NOME: string;

  @Column({ length: 255 })
  FOTO: string;

  @OneToMany(() => QUADRINHO, (quadrinho) => quadrinho.autor)
  @JoinColumn({ name: 'ID_QUADRINHO', referencedColumnName: 'ID' })
  quadrinho: QUADRINHO;
}
