import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { EDITORA } from '../editora/editora.entity';
import { ADMIN } from 'src/admin/admin.entity';
import { AUTOR } from 'src/autor/autor.entity';
import { COLECAO } from 'src/colecao/colecao.entity';

@Entity()
export class QUADRINHO {
  @PrimaryColumn()
  ID: string;

  @Column()
  EDICAO: number;

  @ManyToOne(() => COLECAO, (colecao) => colecao.quadrinho)
  @JoinColumn({ name: 'ID_COLECAO', referencedColumnName: 'ID' })
  colecao: COLECAO;

  @Column({ type: 'text' })
  SINOPSE: string;

  @Column()
  LANCAMENTO: string;

  @Column()
  IMAGEM_CAPA: string;

  @ManyToOne(() => EDITORA, (editora) => editora.quadrinho)
  @JoinColumn({ name: 'ID_EDITORA', referencedColumnName: 'ID' })
  editora: EDITORA;

  @ManyToOne(() => ADMIN, (uploaded_by) => uploaded_by.ID_QUADRINHO)
  @JoinColumn({ name: 'ID_UPLOADED_BY', referencedColumnName: 'ID' })
  uploaded_by: ADMIN;

  @ManyToOne(() => AUTOR, (autor) => autor.quadrinho)
  @JoinColumn({ name: 'ID_AUTOR', referencedColumnName: 'ID' })
  autor: AUTOR;
}
