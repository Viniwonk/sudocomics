import { DataSource } from 'typeorm';
import { EDITORA } from './editora.entity';

export const EditoraProvider = [
  {
    provide: 'EDITORA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(EDITORA),
    inject: ['DATA_SOURCE'],
  },
];
