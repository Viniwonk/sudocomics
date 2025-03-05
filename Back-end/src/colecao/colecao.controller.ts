import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { COLECAO } from './colecao.entity';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ColecaoService } from './colecao.service';
import { CriaColecaoDto } from './dto/criaColecao.dto';
import { RetornaColecaoDto } from './dto/retornaColecao.dto';
import { AlteraColecaoDTO } from './dto/alteraColecao.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EDITORA } from 'src/editora/editora.entity';

@ApiTags('Coleção')
@Controller('colecao')
export class ColecaoController {
  constructor(
    private readonly colecaoService: ColecaoService
    ) {}

  @ApiResponse({
    status: 201,
    description: 'Retorna que a coleção foi criada com sucesso',
  })
  @Post()
  async criaColecao(@Body() dados: CriaColecaoDto): Promise<RetornaColecaoDto> {
    return this.colecaoService.inserir(dados);
  }

  @ApiResponse({
    status: 200,
    description: 'Retorna o sucesso ao encontrar a coleção',
  })
  @Get()
  async listar(): Promise<COLECAO[]> {
    return this.colecaoService.listar();
  }

  @ApiResponse({
    status: 200,
    description:
      'Retorna que o ID específico da coleção foi encontrado com sucesso',
  })
  @Get('ID-:id')
  async listarID(@Param('id') id: string): Promise<COLECAO> {
    return this.colecaoService.localizarID(id);
  }

  @ApiResponse({
    status: 200,
    description: 'Retorna que a Coleção foi alterada com sucesso',
  })
  @Put('ID-:id')
  async alteraColecao(
    @Body() dadosNovos: AlteraColecaoDTO,
    @Param('id') id: string,
  ): Promise<RetornaColecaoDto> {
    return this.colecaoService.alterar(id, dadosNovos);
  }

  @Get('resultados-de-busca')
  async buscarColecao(@Query('nome') nome: string): Promise<COLECAO[]> {
    return this.colecaoService.buscarColecao(nome);
  }

  @Get('editora/:nome')
  async listarPorNomeEditora(@Param('nome') nome:string): Promise<COLECAO[]>{
    return this.colecaoService.listarPorNomeEditora(nome)
  }
}
