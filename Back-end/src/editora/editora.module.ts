import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { EditoraController } from './editora.controller';
import { EditoraService } from './editora.service';
import { EditoraProvider } from './editora.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [EditoraController],
  providers: [...EditoraProvider, EditoraService],
  exports: [EditoraService],
})
export class EditoraModule {}
