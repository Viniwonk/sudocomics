import { useState } from "react";
import { moduleApi } from "../../Api";
import InputBar from "../inputBar";

export default function CadastroColecao() {
  // **Adição de conteúdo - Coleção**
  const [nomeColecao, setNomeColecao] = useState("");
  const [imagemColecao, setImagemColecao] = useState("");
  const [sinopseColecao, setSinopseColecao] = useState("");
  const [lancamentoColecao, setLancamentoColecao] = useState("");
  const [editoraColecao, setEditoraColecao] = useState("");

  // **Funções de Cadastro - Coleção**
  const cadNomeColecao = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomeColecao(event.target.value);
  };
  const cadImagemColecao = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImagemColecao(event.target.value);
  };
  const cadSinopseColecao = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSinopseColecao(event.target.value);
  };
  const cadLancamentoColecao = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLancamentoColecao(event.target.value);
  };
  const handleSelectEditora = (suggestion: { ID: string; NOME: string }) => {
    setEditoraColecao(suggestion.NOME);
  };

  //   ** API
  const addColecao = async () => {
    let json = await moduleApi.adicionarColecao(
      nomeColecao,
      lancamentoColecao,
      imagemColecao,
      sinopseColecao,
      editoraColecao
    );

    if (json) {
      alert("Coleção inserida");
    } else {
      alert("Erro ao inserir coleção");
    }
  };

  return (
    <form className="conteudo-cad-geral">
      <h1>Cadastro de Coleção</h1>
      <div className="input-wrapper" style={{ position: "relative" }}>
        <input
          className="search-bar"
          type="text"
          placeholder="Nome da Coleção"
          onChange={cadNomeColecao}
        />
      </div>
      <div className="input-wrapper" style={{ position: "relative" }}>
        <input
          className="search-bar"
          type="text"
          placeholder="URL da capa principal"
          onChange={cadImagemColecao}
        />
      </div>
      <div className="input-wrapper" style={{ position: "relative" }}>
        <input
          className="search-bar"
          type="text"
          placeholder="Sinopse da coleção"
          onChange={cadSinopseColecao}
        />
      </div>
      <div className="input-wrapper" style={{ position: "relative" }}>
        <input
          className="search-bar"
          type="text"
          placeholder="Data de lançamento"
          onChange={cadLancamentoColecao}
        />
      </div>

      <InputBar
        url="https://sudocomics.onrender.com/editora/resultados-de-busca"
        onSelect={handleSelectEditora}
        onChange={setEditoraColecao}
        placeholder="Editora"
      />

      <button type="button" className="cadastrar-button" onClick={addColecao}>
        Adicionar
      </button>
    </form>
  );
}
