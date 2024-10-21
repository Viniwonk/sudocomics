import { useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer";
import "../style/App.css";
import { moduleApi } from "../Api";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function CadHq() {
  const [activeTab, setActiveTab] = useState("quadrinho");
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // **Adição de conteúdo - Quadrinho**
  const [vol, setVol] = useState("");
  const [editora, setEditora] = useState("");
  const [colecao, setColecao] = useState("");
  const [imagem, setImagem] = useState("");
  const [usuario, setUsuario] = useState("");
  const [lancamento, setLancamento] = useState("");
  const [autor, setAutor] = useState("");

  // **Adição de conteúdo - Autor**
  const [nomeAutor, setNomeAutor] = useState("");
  const [foto, setFoto] = useState("");

  // **Funções de Cadastro - Quadrinho**
  const cadVol = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVol(event.target.value);
  };
  const cadLancamento = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLancamento(event.target.value);
  };
  const cadEditora = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditora(event.target.value);
  };
  const cadColecao = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColecao(event.target.value);
  };
  const cadImagem = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImagem(event.target.value);
  };
  const cadUsuario = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario(event.target.value);
  };
  // **Funções de Cadastro - Autor**
  const cadNomeAutor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomeAutor(event.target.value);
  };

  // **Api**
  const addQuadrinho = async () => {
    let json = await moduleApi.adicionarQuadrinho(
      vol,
      colecao,
      lancamento,
      imagem,
      editora,
      usuario
    );

    if (json.vol) {
      alert("Quadrinho inserido");
    } else {
      alert("Erro ao inserir quadrinho");
    }
  };

  return (
    <div>
      <Header />
      <div className="container-cadastro-geral">
        <Tabs>
          <TabList>
            <Tab>Quadrinho</Tab>
            <Tab>Autor</Tab>
            <Tab>Editora</Tab>
          </TabList>

          <TabPanel>
            <form className="conteudo-cad-geral">
              <h1>Cadastro de quadrinho</h1>
              <input
                className="Input-Padrão"
                type="text"
                placeholder="Nome da coleção"
                onChange={cadColecao}
              />
              <input
                type="text"
                placeholder="Edição"
                onChange={cadVol}
                className="Input-Padrão"
              />
              <input
                type="text"
                className="Input-Padrão"
                placeholder="Data de Lançamento"
                onChange={cadLancamento}
              />
              <input type="text" placeholder="Autor" className="Input-Padrão" />
              <input
                type="text"
                placeholder="Editora"
                className="Input-Padrão"
                onChange={cadEditora}
              />
              <input
                type="text"
                placeholder="Foto de capa"
                className="Input-Padrão"
                onChange={cadImagem}
              />
              <input
                type="text"
                placeholder="Usuário"
                className="Input-Padrão"
                onChange={cadUsuario}
              />
              <p style={{ color: "red", textAlign: "start", padding: "10px" }}>
                *Certifique-se de que as informações tenham vindo do dropdown ao
                cadastrar
              </p>
              <button
                type="button"
                onClick={addQuadrinho}
                className="cadastrar-button"
              >
                Adicionar
              </button>
            </form>
          </TabPanel>

          <TabPanel>
            <form className="conteudo-cad-geral">
              <h1>Cadastro de autor</h1>
              <input
                type="text"
                placeholder="Nome do Autor"
                className="Input-Padrão"
              />
              <input
                type="text"
                placeholder="URL da imagem"
                className="Input-Padrão"
              />
              <button type="button" className="cadastrar-button">
                Adicionar
              </button>
            </form>
          </TabPanel>

          <TabPanel>
            <form className="conteudo-cad-geral">
              <h1>Cadastro de editora</h1>
              <input
                type="text"
                placeholder="Nome da editora"
                className="Input-Padrão"
                onChange={cadEditora}
              />
              <input
                type="text"
                placeholder="URL da logo da editora"
                className="Input-Padrão"
                onChange={cadEditora}
              />
              <button type="button" className="cadastrar-button">
                Adicionar
              </button>
            </form>
          </TabPanel>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}
