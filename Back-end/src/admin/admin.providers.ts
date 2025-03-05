import { DataSource } from 'typeorm';
import { ADMIN } from './admin.entity';

export const adminProviders = [
  {
    provide: 'ADMIN_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ADMIN),
    inject: ['DATA_SOURCE'],
  },
];
