import { useState } from "react";
import { moduleApi } from "../../Api";
import InputBar from "../inputBar";
import useFetchSuggestions from "../../hooks/useFetchSuggestions";

const CadastroQuadrinhos = () => {
  const [vol, setVol] = useState(0);
  const [editora, setEditora] = useState("");
  const [colecao, setColecao] = useState("");
  const [imagem, setImagem] = useState("");
  const [sinopse, setSinopse] = useState("");
  const [usuario, setUsuario] = useState("");
  const [lancamento, setLancamento] = useState("");
  const [autor, setAutor] = useState("");

  const [pesquisa, setPesquisa] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSelectColecao = (suggestion: { ID: string; NOME: string }) => {
    setColecao(suggestion.NOME);
  };

  const handleSelectAutor = (suggestion: { ID: string; NOME: string }) => {
    setAutor(suggestion.NOME);
  };

  const handleSelectEditora = (suggestion: { ID: string; NOME: string }) => {
    setEditora(suggestion.NOME);
  };

  const handleSelectUsuario = (suggestion: { ID: string; NOME: string }) => {
    setUsuario(suggestion.NOME);
  };
  const handleChangeVol = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numero = parseInt(value, 10);
    setVol(numero);
  };

  const addQuadrinho = async () => {
    let json = await moduleApi.adicionarQuadrinho(
      vol,
      colecao,
      lancamento,
      imagem,
      sinopse,
      editora,
      usuario,
      autor
    );
    if (json) {
      alert("Quadrinho inserido");
    } else {
      alert("Erro ao inserir quadrinho");
    }
  };

  return (
    <form className="conteudo-cad-geral">
      <h1>Cadastro de quadrinho</h1>
      <InputBar
        url="https://sudocomics.onrender.com/colecao/resultados-de-busca"
        onSelect={handleSelectColecao}
        placeholder="Pesquisar"
        onChange={setPesquisa}
      />

      <div className="input-wrapper" style={{ position: "relative" }}>
        <input
          className="search-bar"
          type="text"
          placeholder="Edição"
          onChange={handleChangeVol}
        />
      </div>
      <div className="input-wrapper" style={{ position: "relative" }}>
        <input
          className="search-bar"
          type="text"
          placeholder="Data de Lançamento"
          onChange={(e) => setLancamento(e.target.value)}
        />
      </div>

      <InputBar
        url="https://sudocomics.onrender.com/autor/resultados-de-busca"
        onSelect={handleSelectAutor}
        onChange={setAutor}
        placeholder="Autor"
      />
      <InputBar
        url="https://sudocomics.onrender.com/editora/resultados-de-busca"
        onSelect={handleSelectEditora}
        onChange={setEditora}
        placeholder="Editora"
      />

      <div className="input-wrapper" style={{ position: "relative" }}>
        <input
          className="search-bar"
          type="text"
          placeholder="URL da capa"
          onChange={(e) => setImagem(e.target.value)}
        />
      </div>

      <div className="input-wrapper" style={{ position: "relative" }}>
        <input
          className="search-bar"
          type="text"
          placeholder="Sinopse"
          onChange={(e) => setSinopse(e.target.value)}
        />
      </div>
      <InputBar
        url="https://sudocomics.onrender.com/admin/resultados-de-busca"
        onSelect={handleSelectUsuario}
        onChange={setUsuario}
        placeholder="Usuário"
      />
      <p style={{ color: "red", textAlign: "start", padding: "10px" }}>
        *Certifique-se de que as informações tenham vindo do dropdown ao
        cadastrar
      </p>
      <button type="button" onClick={addQuadrinho} className="cadastrar-button">
        Adicionar
      </button>
    </form>
  );
};

export default CadastroQuadrinhos;
