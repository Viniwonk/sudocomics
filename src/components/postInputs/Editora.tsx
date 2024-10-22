import { useState } from "react";
import { moduleApi } from "../../Api";

export default function CadastroEditora() {
  // **Adição de conteúdo - Editora**
  const [nomeEditora, setNomeEditora] = useState("");
  const [Logo, setLogo] = useState("");

  // **Funções de Cadastro - Editora**
  const cadNomeEditora = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomeEditora(event.target.value);
  };
  const cadLogo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogo(event.target.value);
  };

  //   ** API
  const addEditora = async () => {
    let json = await moduleApi.adcionarEditora(nomeEditora, Logo);

    if (json) {
      alert("Editora inserida");
    } else {
      alert("Erro ao inserir editora");
    }
  };

  return (
    <form className="conteudo-cad-geral">
      <h1>Cadastro de editora</h1>
      <div className="input-wrapper" style={{ position: "relative" }}>
        <input
          className="search-bar"
          type="text"
          placeholder="Nome da Editora"
          onChange={cadNomeEditora}
        />
      </div>
      <div className="input-wrapper" style={{ position: "relative" }}>
        <input
          className="search-bar"
          type="text"
          placeholder="URL da logo"
          onChange={cadLogo}
        />
      </div>
      <button type="button" className="cadastrar-button" onClick={addEditora}>
        Adicionar
      </button>
    </form>
  );
}
