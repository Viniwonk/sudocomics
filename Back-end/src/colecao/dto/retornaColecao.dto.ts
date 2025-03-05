import { COLECAO } from '../colecao.entity';

export class RetornaColecaoDto {
  constructor(
    readonly status: string,
    readonly colecao: COLECAO,
  ) {}
}
