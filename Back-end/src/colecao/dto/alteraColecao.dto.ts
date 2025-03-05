import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class AlteraColecaoDTO {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Jorisvaldo o Cartunista',
    description: 'alteração do nome da coleção',
  })
  NOME: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'DD-MM-YYYY',
    description: 'Alteração do lancamento da colecao',
  })
  LANCAMENTO: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'http://www.bancodeimagens.com/the-avengers/01/capa.png',
    description: 'Alteração da imagem padrão da coleção',
  })
  FOTO: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ example: 1, description: '0000' })
  QUADRINHO: string;
}
