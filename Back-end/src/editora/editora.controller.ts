import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CriaEditoraDTO } from './dto/criaEditora.dto';

import { RetornaEditoraDto } from './dto/retornaEditora.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { EditoraService } from './editora.service';
import { EDITORA } from './editora.entity';
import { AlteraEditoraDTO } from './dto/alteraEditora';
import { COLECAO } from 'src/colecao/colecao.entity';
import { ColecaoService } from 'src/colecao/colecao.service';

@ApiTags('Editora')
@Controller('/editora')
export class EditoraController {
  constructor(private readonly editoraService: EditoraService) {}

  @ApiResponse({
    status: 201,
    description: 'retorna que a editora foi criada com sucesso',
  })
  @ApiResponse({
    status: 400,
    description:
      'Retorna que nao foi Possivel a criação do autor, Por favor checar as informações',
  })
  @Post()
  async criaEditora(@Body() dados: CriaEditoraDTO): Promise<RetornaEditoraDto> {
    return this.editoraService.inserir(dados);
  }

  //Pesquisa
  @ApiResponse({
    status: 200,
    description: 'Retorna o sucesso ao encontrar a editora',
  })
  @ApiResponse({
    status: 500,
    description:
      'Retorna que não foi possível encontrar a editora,favor checar as informações',
  })
  @Get()
  async listar(): Promise<EDITORA[]> {
    return this.editoraService.listar();
  }

  //Pesquisa por ID
  @ApiResponse({
    status: 200,
    description:
      'Retorna que a Edidora com uma id específica foi encontrada com sucesso',
  })
  @ApiResponse({
    status: 500,
    description:
      'Retorna que não foi possível encontrar a id da editora,favor checar as informações',
  })
  @Get('ID-:nomeEditora')
  async pesquisaNome(
    @Param('nomeEditora') nomeEditora: string,
  ): Promise<EDITORA> {
    return this.editoraService.localizarNome(nomeEditora);
  }
  @Put('ID-:id')
  async alteraEditora(
    @Body() dadosNovos: AlteraEditoraDTO,
    @Param('id') id: string,
  ): Promise<RetornaEditoraDto> {
    return this.editoraService.alterar(id, dadosNovos);
  }
  // Resultados de busca
  @Get('resultados-de-busca')
  async buscarEditora(@Query('nome') nome: string): Promise<EDITORA[]> {
    return this.editoraService.buscarEditora(nome);
  }
}
