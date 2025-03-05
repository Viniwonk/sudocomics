import { EDITORA} from '../editora.entity';

export class RetornaEditoraDto {
  constructor(
    readonly status: string,
    readonly editora: EDITORA,
  ) {}
}
