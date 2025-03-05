import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { SenhaForte } from '../validacao/strongpass.validator';

export class CriaAdminDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Carlos Eduardo',
    description:
      'Nome usado como identificador do administrador, tal qual QUEM subiu ou alterou os dados',
  })
  NOME: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    example: 'carloseduardo@example.com',
    description:
      'Email usado como identificador do administrador, e para Login.',
  })
  EMAIL: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  // @SenhaForte({
  //   message:
  //     'Senha deve ter 6 caracteres, letra MAIÚSCULA, minúscula, número e caractere especial.',
  // })
  @ApiProperty({
    example: 'carlosEduardo123',
    description: 'Senha utilizada para fazer login',
  })
  SENHA: string;
}
