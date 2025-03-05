
export class ListaEditoraDTO{
    constructor(
        readonly ID: string,
        readonly NOME: string,
        readonly LOGO: string,
        readonly QUADRINHO: string, //momentaneo até a criação do banco de dados
    ){}
}
