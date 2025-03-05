import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class AlteraAutorDTO {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Jorisvaldo o Cartunista',
    description: 'alteração do nome da Autor',
  })
  NOME: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'http://www.bancodeimagens.com/the-avengers/01/capa.png',
    description: 'Alteração da imagem utilizada pelo autor',
  })
  FOTO: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ example: 1, description: '0000' })
  QUADRINHO: string; //temporario
}
