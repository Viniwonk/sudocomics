import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { AutorService } from './autor.service';
import { CriaAutorDTO } from './dto/criaAutor.dto';
import { RetornaAutorDto } from './dto/retornaAutor.dto';
import { AUTOR } from './autor.entity';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AlteraAutorDTO } from './dto/alteraAutor';

@ApiTags('Autor')
@Controller('/autor')
export class AutorController {
  constructor(private readonly autorService: AutorService) {}

  //Criação
  @ApiResponse({
    status: 201,
    description: 'Retorna que o Autor foi criada com sucesso',
  })
  @ApiResponse({
    status: 400,
    description:
      'Retorna que não foi possível a criação da Autor,favor checar as informações',
  })
  @Post()
  async criaAutor(@Body() dados: CriaAutorDTO): Promise<RetornaAutorDto> {
    return this.autorService.inserir(dados);
  }

  //Pesquisa
  @ApiResponse({
    status: 200,
    description: 'Retorna o sucesso ao encontrar o autor',
  })
  @ApiResponse({
    status: 500,
    description:
      'Retorna que não foi possível encontrar o autor,favor checar as informações',
  })
  @Get()
  async listar(): Promise<AUTOR[]> {
    return this.autorService.listar();
  }

  //Pesquisa por ID
  @ApiResponse({
    status: 200,
    description:
      'Retorna que o id específico do Autor foi encontrado com sucesso',
  })
  @ApiResponse({
    status: 500,
    description:
      'Retorna que não foi possível encontrar a id da autor,favor checar as informações',
  })
  @Get('ID-:id')
  async listarID(@Param('id') id: string): Promise<AUTOR> {
    return this.autorService.localizarID(id);
  }
  //Alteração
  @ApiResponse({
    status: 200,
    description: 'Retorna que o Autor foi alterado com sucesso',
  })
  @ApiResponse({
    status: 500,
    description:
      'Retorna que não foi possível a alteração da Autor,favor checar as informações',
  })
  @Put('/ID-:id')
  async alteraAutor(
    @Body() dadosNovos: AlteraAutorDTO,
    @Param('id') id: string,
  ): Promise<RetornaAutorDto> {
    return this.autorService.alterar(id, dadosNovos);
  }
  // Resultados de busca
  @Get('resultados-de-busca')
  async buscarColecao(@Query('nome') nome: string): Promise<AUTOR[]> {
    return this.autorService.buscarAutor(nome);
  }
}
