import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ColecaoProvider } from './colecao.provider';
import { ColecaoService } from './colecao.service';
import { ColecaoController } from './colecao.controller';
import { EditoraProvider } from 'src/editora/editora.provider';
import { EditoraService } from 'src/editora/editora.service';
import { EditoraModule } from 'src/editora/editora.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ColecaoController],
  providers: [
    ...ColecaoProvider,
    ColecaoService,
    ...EditoraProvider,
    EditoraService,
  ],
})
export class ColecaoModule {}
