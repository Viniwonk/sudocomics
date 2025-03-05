export class listaColecaoDTO {
  constructor(
    readonly id: string,
    readonly nome: string,
    readonly lancamento: string,
    readonly foto: string,
    readonly sinopse: string,
  ) {}
}
