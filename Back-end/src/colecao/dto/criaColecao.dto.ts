import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CriaColecaoDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'The Avengers',
    description: 'Nome da coleção a ser inserida',
  })
  NOME: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'DD-MM-YYYY',
    description: 'Data de lancamento da colecao',
  })
  LANCAMENTO: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'http://www.bancodeimagens.com/the-avengers/01/capa.png',
    description: 'Foto padrão para determinada coleção',
  })
  FOTO: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel pellentesque sem, vitae venenatis urna. Sed convallis vel tellus vitae vulputate. Mauris tempor quam turpis, vitae commodo ex porta eu. ',
    description: 'Sinopse de determinada coleção',
  })
  SINOPSE: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Marvel',
    description: 'Editora de determinada coleção',
  })
  EDITORA: string;
}
