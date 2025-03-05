export class listaQuadrinhoDTO {
  constructor(
    readonly id: string,
    readonly edicao: number,
    readonly colecao: string,
    readonly lancamento: string,
    readonly imagemCapa: string,
    readonly editora: string,
    readonly uploadedBy: string,
  ) {}
}
