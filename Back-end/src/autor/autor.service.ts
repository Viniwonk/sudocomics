import { v4 as uuid } from 'uuid';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { AUTOR } from './autor.entity';
import { Like, Repository } from 'typeorm';
import { CriaAutorDTO } from './dto/criaAutor.dto';
import { RetornaAutorDto } from './dto/retornaAutor.dto';
import { AlteraAutorDTO } from './dto/alteraAutor';

@Injectable()
export class AutorService {
  constructor(
    @Inject('AUTOR_REPOSITORY')
    private readonly autorRepository: Repository<AUTOR>,
  ) {}

  async listar(): Promise<AUTOR[]> {
    return this.autorRepository.find();
  }

  async inserir(dados: CriaAutorDTO): Promise<RetornaAutorDto> {
    let autor = new AUTOR();
    autor.ID = uuid();
    autor.NOME = dados.NOME;
    autor.FOTO = dados.FOTO;

    return this.autorRepository
      .save(autor)
      .then((result) => {
        return <RetornaAutorDto>{
          status: 'Autor Criado',
          autor: autor,
        };
      })
      .catch((error) => {
        return <RetornaAutorDto>{
          status: 'Erro ao criar o Autor',
          autor: error,
        };
      });
  }

  async alterar(id: string, dados: AlteraAutorDTO): Promise<RetornaAutorDto> {
    const autor = await this.localizarID(id);

    Object.entries(dados).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }
      autor[chave] = valor;
    });

    return this.autorRepository
      .save(autor)
      .then((result) => {
        return <RetornaAutorDto>{
          status: 'Autor Alterado',
          autor: autor,
        };
      })
      .catch((error) => {
        return <RetornaAutorDto>{
          status: 'Erro ao alterar o Autor',
          autor: error,
        };
      });
  }
  localizarID(ID: string): Promise<AUTOR> {
    return this.autorRepository.findOne({
      where: {
        ID,
      },
    });
  }

  localizarNome(NOME: string): Promise<AUTOR> {
    return this.autorRepository.findOne({
      where: {
        NOME,
      },
    });
  }
  async buscarAutor(nome: string): Promise<AUTOR[]> {
    const autoresEncontrados = await this.autorRepository.find({
      where: { NOME: Like(`%${nome}%`) },
    });
    if (autoresEncontrados.length === 0) {
      throw new NotFoundException(`Admin de nome ${nome} não encontrada`);
    }
    return autoresEncontrados;
  }
}
