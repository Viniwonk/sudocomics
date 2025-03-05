export class ListaAutorDTO {
  constructor(
    readonly ID: string,
    readonly NOME: string,
    readonly FOTO: string,
    readonly QUADRINHO: string, //momentaneo até a criação do banco de dados
  ) {}
}
