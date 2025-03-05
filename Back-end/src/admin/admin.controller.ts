import { Controller, Post, Body, Get, Param, Put, Query } from '@nestjs/common';
import { ADMIN } from './admin.entity';
import { CriaAdminDTO } from './dto/criaAdmin.dto';
import { retornaAdminDTO } from './dto/retornaAdmin.dto';
import { ApiTags } from '@nestjs/swagger';
import { AdminService } from './admin.service';
import { AlteraAdminDTO } from './dto/alteraAdmin.dto';
import { loginAdminDTO } from './dto/loginAdmin.dto';

@ApiTags('Usuários')
@Controller('/admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  async criaAdmin(@Body() dados: CriaAdminDTO): Promise<retornaAdminDTO> {
    return this.adminService.inserir(dados);
  }

  @Post('login')
  async login(@Body() dados: loginAdminDTO): Promise<{ success: boolean }> {
    return this.adminService.login(dados);
  }

  @Get()
  async listar(): Promise<ADMIN[]> {
    return this.adminService.listar();
  }

  @Get('resultados-de-busca')
  async buscarAdmin(@Query('nome') nome: string): Promise<ADMIN[]> {
    return this.adminService.buscarAdmin(nome);
  }

  @Get('ID-:id')
  async listarID(@Param('id') id: string): Promise<ADMIN> {
    return this.adminService.localizarID(id);
  }

  @Put('ID-:id')
  async alterarAdmin(
    @Body() dados: AlteraAdminDTO,
    @Param('id') id: string,
  ): Promise<retornaAdminDTO> {
    return this.adminService.alterar(id, dados);
  }
}
