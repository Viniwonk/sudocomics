import { DataSource } from 'typeorm';
import { COLECAO } from './colecao.entity';

export const ColecaoProvider = [
  {
    provide: 'COLECAO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(COLECAO),
    inject: ['DATA_SOURCE'],
  },
];
