import * as bcrypt from 'bcrypt';
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class ADMIN {
  @PrimaryColumn()
  ID: string;

  @Column()
  NOME: string;

  @Column()
  EMAIL: string;

  @Column()
  SENHA: string;

  @Column()
  ID_QUADRINHO: string;

  // quadrinhosEnviados:Quadrinho[]
  //   constructor(id: string, nome: string, email: string, senha: string) {
  //     const saltOrRounds = 10;
  //     this.id = id;
  //     this.nome = nome;
  //     this.email = email;
  //     this.senha = bcrypt.hashSync(senha,saltOrRounds)
  //     // this.quadrinhosEnviados:Quadrinho[];
  //   }
  //   trocaSenha(senha){
  //     const saltOrRounds =10;
  //     this.senha = bcrypt.hashSync(senha, saltOrRounds)
  // }
  // login(senha){
  //     return bcrypt.compareSync(senha,this.senha)
  // }
}
