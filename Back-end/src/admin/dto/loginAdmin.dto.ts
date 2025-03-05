import { IsEmail, MinLength } from 'class-validator';

export class loginAdminDTO {
  @IsEmail(undefined, { message: 'Email inválido' })
  EMAIL: string;

  @MinLength(8, { message: 'Senha inválida' })
  SENHA: string;
}
