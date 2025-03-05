import { v4 as uuid } from 'uuid';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { CriaColecaoDto } from './dto/criaColecao.dto';
import { AlteraColecaoDTO } from './dto/alteraColecao.dto';
import { RetornaColecaoDto } from './dto/retornaColecao.dto';
import { COLECAO } from './colecao.entity';
import { EditoraService } from 'src/editora/editora.service';
import { EDITORA } from 'src/editora/editora.entity';

@Injectable()
export class ColecaoService {
  constructor(
    @Inject('COLECAO_REPOSITORY')
    private readonly colecaoRepository: Repository<COLECAO>,
    private editoraService: EditoraService,
  ) {}

  async listar(): Promise<COLECAO[]> {
    return this.colecaoRepository.find();
  }

  async inserir(dados: CriaColecaoDto): Promise<RetornaColecaoDto> {
    let colecao = new COLECAO();
    colecao.ID = uuid();
    colecao.NOME = dados.NOME;
    colecao.LANCAMENTO = dados.LANCAMENTO;
    colecao.FOTO = dados.FOTO;
    colecao.SINOPSE = dados.SINOPSE;
    colecao.editora = await this.editoraService.localizarNome(dados.EDITORA);

    return this.colecaoRepository
      .save(colecao)
      .then((result) => {
        return {
          status: 'Coleção criada',
          colecao: colecao,
        };
      })
      .catch((error) => {
        return {
          status: 'Erro ao criar a coleção',
          colecao: error,
        };
      });
  }

  async alterar(
    id: string,
    dados: AlteraColecaoDTO,
  ): Promise<RetornaColecaoDto> {
    const colecao = await this.localizarID(id);
    Object.entries(dados).forEach(([chave, valor]) => {
      if (chave !== 'id') {
        colecao[chave] = valor;
      }
    });

    return this.colecaoRepository
      .save(colecao)
      .then((result) => {
        return {
          status: 'Coleção alterada',
          colecao: colecao,
        };
      })
      .catch((error) => {
        return {
          status: 'Erro ao alterar a coleção',
          colecao: error,
        };
      });
  }

  async localizarID(ID: string): Promise<COLECAO> {
    const colecao = await this.colecaoRepository.findOne({
      where: { ID },
      relations: ['editora'],
    });
    if (!colecao) {
      throw new NotFoundException(`Coleção com ID ${ID} não encontrada`);
    }
    return colecao;
  }

  async localizarNome(NOME: string): Promise<COLECAO> {
    const colecao = await this.colecaoRepository.findOne({ where: { NOME } });
    if (!colecao) {
      throw new NotFoundException(`Coleção com nome ${NOME} não encontrada`);
    }
    return colecao;
  }

  async buscarColecao(nome: string): Promise<COLECAO[]> {
    const colecoesEncontradas = await this.colecaoRepository.find({
      where: { NOME: Like(`%${nome}%`) },
    });
    if (colecoesEncontradas.length === 0) {
      throw new NotFoundException(`Coleção com nome ${nome} não encontrada`);
    }
    return colecoesEncontradas;
  }

  async listarPorNomeEditora(nomeEditora: string): Promise<COLECAO[]> {
    return this.colecaoRepository
      .createQueryBuilder('colecao')
      .leftJoinAndSelect('colecao.editora', 'editora')
      .where('editora.NOME = :nomeEditora', { nomeEditora })
      .getMany();
  }
}
