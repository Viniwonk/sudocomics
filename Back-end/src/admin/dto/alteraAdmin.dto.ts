import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  IsOptional,
} from 'class-validator';
import { SenhaForte } from '../validacao/strongpass.validator';

export class AlteraAdminDTO {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Carlos Eduardo',
    description:
      'Nome usado como identificador do administrador, tal qual QUEM subiu ou alterou os dados',
  })
  NOME: string;

  @IsEmail()
  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'carloseduardo@example.com',
    description:
      'Email usado como identificador do administrador, e para Login.',
  })
  EMAIL: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @IsOptional()
  @SenhaForte({
    message: 'Senha deve ter complexidade maior. Está muito fraca.',
  })
  @ApiPropertyOptional({
    example: 'carlosEduardo123',
    description: 'Senha utilizada para fazer login',
  })
  SENHA: string;
}
