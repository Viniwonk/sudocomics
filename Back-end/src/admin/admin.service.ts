import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { ADMIN } from './admin.entity';
import { v4 as uuid } from 'uuid';
import { CriaAdminDTO } from './dto/criaAdmin.dto';
import { retornaAdminDTO } from './dto/retornaAdmin.dto';
import { AlteraAdminDTO } from './dto/alteraAdmin.dto';
import { loginAdminDTO } from './dto/loginAdmin.dto';

@Injectable()
export class AdminService {
  constructor(
    @Inject('ADMIN_REPOSITORY')
    private readonly adminRepository: Repository<ADMIN>,
  ) {}

  async listar(): Promise<ADMIN[]> {
    return this.adminRepository.find();
  }

  async inserir(dados: CriaAdminDTO): Promise<retornaAdminDTO> {
    let admin = new ADMIN();
    admin.ID = uuid();
    admin.NOME = dados.NOME;
    admin.EMAIL = dados.EMAIL;
    admin.SENHA = dados.SENHA;

    return this.adminRepository
      .save(admin)
      .then((result) => {
        return <retornaAdminDTO>{
          status: 'Admin Criado',
          admin: admin,
        };
      })
      .catch((error) => {
        return <retornaAdminDTO>{
          status: 'Erro ao criar Admin',
          admin: error,
        };
      });
  }

  async login(dados: loginAdminDTO): Promise<{ success: boolean }> {
    const { EMAIL, SENHA } = dados;
    const admin = await this.adminRepository.findOne({
      where: { EMAIL: EMAIL, SENHA: SENHA },
    });

    if (!admin) {
      throw new Error('Admin não encontrado');
    }
    return { success: true };
  }

  async alterar(Id: string, dados: AlteraAdminDTO): Promise<retornaAdminDTO> {
    const admin = await this.localizarID(Id);

    Object.entries(dados).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      admin[chave] = valor;
    });

    return this.adminRepository
      .save(admin)
      .then((result) => {
        return <retornaAdminDTO>{
          status: 'Admin Alterado',
          admin: admin,
        };
      })
      .catch((error) => {
        return <retornaAdminDTO>{
          status: 'Erro ao alterar Admin',
          admin: error,
        };
      });
  }

  localizarID(ID: string): Promise<ADMIN> {
    return this.adminRepository.findOne({
      where: {
        ID,
      },
    });
  }

  localizarNome(NOME: string): Promise<ADMIN> {
    return this.adminRepository.findOne({
      where: {
        NOME,
      },
    });
  }
  async buscarAdmin(nome: string): Promise<ADMIN[]> {
    const adminsEncontrados = await this.adminRepository.find({
      where: { NOME: Like(`%${nome}%`) },
    });
    if (adminsEncontrados.length === 0) {
      throw new NotFoundException(`Admin de nome ${nome} não encontrada`);
    }
    return adminsEncontrados;
  }
}
