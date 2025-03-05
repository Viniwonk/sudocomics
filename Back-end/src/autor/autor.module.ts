import { Module } from '@nestjs/common';
import { AutorController } from './autor.controller';
import { AutorService } from './autor.service';
import { DatabaseModule } from 'src/database/database.module';
import { AutorProvider } from './autor.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [AutorController],
  providers: [...AutorProvider, AutorService],
})
export class AutorModule {}
