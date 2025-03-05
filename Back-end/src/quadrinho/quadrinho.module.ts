import { Module } from '@nestjs/common';
import { QuadrinhoController } from './quadrinho.controller';
import { DatabaseModule } from 'src/database/database.module';
import { QuadrinhoProvider } from './quadrinho.provider';
import { QuadrinhoService } from './quadrinho.service';
import { AutorService } from 'src/autor/autor.service';
import { AdminService } from 'src/admin/admin.service';
import { AutorProvider } from 'src/autor/autor.provider';
import { adminProviders } from 'src/admin/admin.providers';
import { ColecaoProvider } from 'src/colecao/colecao.provider';
import { ColecaoService } from 'src/colecao/colecao.service';
import { EditoraProvider } from 'src/editora/editora.provider';
import { EditoraService } from 'src/editora/editora.service';

@Module({
  imports: [DatabaseModule],
  controllers: [QuadrinhoController],
  providers: [
    ...QuadrinhoProvider,
    QuadrinhoService,
    ...AutorProvider,
    AutorService,
    ...adminProviders,
    AdminService,
    ...ColecaoProvider,
    ColecaoService,
    ...EditoraProvider,
    EditoraService,
  ],
})
export class QuadrinhoModule {}
