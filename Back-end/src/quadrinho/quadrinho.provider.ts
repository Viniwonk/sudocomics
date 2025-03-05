import { DataSource } from 'typeorm';
import { QUADRINHO } from './quadrinho.entity';

export const QuadrinhoProvider = [
  {
    provide: 'QUADRINHO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(QUADRINHO),
    inject: ['DATA_SOURCE'],
  },
];
