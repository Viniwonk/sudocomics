import { Module } from '@nestjs/common';
import { adminProviders } from './admin.providers';
import { AdminService } from './admin.service';
import { DatabaseModule } from 'src/database/database.module';
import { AdminController } from './admin.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AdminController],
  providers: [...adminProviders, AdminService],
})
export class AdminModule {}
