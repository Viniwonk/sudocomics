import { AUTOR } from '../autor.entity';

export class RetornaAutorDto {
  constructor(
    readonly status: string,
    readonly autor: AUTOR,
  ) {}
}
