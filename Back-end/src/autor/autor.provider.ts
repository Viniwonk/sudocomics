import { DataSource } from 'typeorm';
import { AUTOR } from './autor.entity';

export const AutorProvider = [
  {
    provide: 'AUTOR_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(AUTOR),
    inject: ['DATA_SOURCE'],
  },
];
