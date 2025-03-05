import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CriaAutorDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Jorisvaldo o Cartunista',
    description: 'O nome do autor do quadrinho a ser inserido',
  })
  NOME: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'http://www.bancodeimagens.com/the-avengers/01/capa.png',
    description: 'O beleza do autor do quadrinho a ser inserida',
  })
  FOTO: string;
}
