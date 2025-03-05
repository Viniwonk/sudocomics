import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class AlteraQuadrinhoDTO {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({
    example: 1,
    description: 'Edição do quadrinho (se alterada)',
  })
  edicao: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'The Avengers',
    description: 'Nome da coleção do quadrinho (se alterada)',
  })
  colecao: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: '01/01/2024',
    description: 'Data de lançamento do quadrinho (se alterada)',
  })
  lancamento: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'http://www.bancodeimagens.com/the-avengers/01/capa.png',
    description: 'URL da imagem de capa do quadrinho (se alterada)',
  })
  imagemCapa: string;

  @IsString()
  @IsNotEmpty({ message: 'Nome do alterante deve ser inserida' })
  @ApiProperty({
    example: 'Carlos Eduardo',
    description: 'Nome do usuário que alterou as informações do quadrinho',
  })
  uploadedBy: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Marvel',
    description: 'Editora que publicou o quadrinho (se alterada)',
  })
  editora: string;
}
