import { v4 as uuid } from 'uuid';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { EDITORA } from './editora.entity';
import { Like, Repository } from 'typeorm';
import { CriaEditoraDTO } from './dto/criaEditora.dto';
import { RetornaEditoraDto } from './dto/retornaEditora.dto';
import { AlteraEditoraDTO } from './dto/alteraEditora';
import { COLECAO } from 'src/colecao/colecao.entity';

@Injectable()
export class EditoraService {
  constructor(
    @Inject('EDITORA_REPOSITORY')
    private readonly editoraRepository: Repository<EDITORA>,
  ) {}

  async listar(): Promise<EDITORA[]> {
    return this.editoraRepository.find();
  }

  async inserir(dados: CriaEditoraDTO): Promise<RetornaEditoraDto> {
    let editora = new EDITORA();
    editora.ID = uuid();
    editora.NOME = dados.NOME;
    editora.LOGO = dados.LOGO;

    return this.editoraRepository
      .save(editora)
      .then((result) => {
        return <RetornaEditoraDto>{
          status: 'Editora Criada',
          editora: editora,
        };
      })
      .catch((error) => {
        return <RetornaEditoraDto>{
          status: 'Erro ao criar o Editora',
          editora: error,
        };
      });
  }

  async alterar(
    id: string,
    dados: AlteraEditoraDTO,
  ): Promise<RetornaEditoraDto> {
    const editora = await this.localizarID(id);

    Object.entries(dados).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }
      editora[chave] = valor;
    });

    return this.editoraRepository
      .save(editora)
      .then((result) => {
        return <RetornaEditoraDto>{
          status: 'Editora Alterada',
          editora: editora,
        };
      })
      .catch((error) => {
        return <RetornaEditoraDto>{
          status: 'Erro ao alterar a Editora',
          editora: error,
        };
      });
  }

  localizarID(ID: string): Promise<EDITORA> {
    return this.editoraRepository.findOne({
      where: {
        ID,
      },
    });
  }

  localizarNome(NOME: string): Promise<EDITORA> {
    return this.editoraRepository.findOne({
      where: {
        NOME,
      },
    });
  }

  async buscarEditora(nome: string): Promise<EDITORA[]> {
    const editorasEncontradas = await this.editoraRepository.find({
      where: { NOME: Like(`%${nome}%`) },
    });
    if (editorasEncontradas.length === 0) {
      throw new NotFoundException(`Admin de nome ${nome} não encontrada`);
    }
    return editorasEncontradas;
  }
}
