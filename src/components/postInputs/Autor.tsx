import { useState } from "react";
import { moduleApi } from "../../Api";

export default function CadastroAutor() {
  // **Adição de conteúdo - Autor**
  const [nomeAutor, setNomeAutor] = useState("");
  const [fotoAutor, setFotoAutor] = useState("");

  // **Funções de Cadastro - Autor**
  const cadNomeAutor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomeAutor(event.target.value);
  };
  const cadFotoAutor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFotoAutor(event.target.value);
  };

  //   ** API
  const addAutor = async () => {
    let json = await moduleApi.adcionarAutor(nomeAutor, fotoAutor);

    if (json) {
      alert("Coleção inserida");
    } else {
      alert("Erro ao inserir coleção");
    }
  };

  return (
    <form className="conteudo-cad-geral">
      <h1>Cadastro de autor</h1>
      <div className="input-wrapper" style={{ position: "relative" }}>
        <input
          className="search-bar"
          type="text"
          placeholder="Nome do Autor"
          onChange={cadNomeAutor}
        />
      </div>
      <div className="input-wrapper" style={{ position: "relative" }}>
        <input
          className="search-bar"
          type="text"
          placeholder="URL da foto"
          onChange={cadFotoAutor}
        />
      </div>
      <button type="button" className="cadastrar-button" onClick={addAutor}>
        Adicionar
      </button>
    </form>
  );
}
