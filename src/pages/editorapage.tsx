import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { moduleApi } from "../Api";
import Header from "../components/header/header";
import Footer from "../components/footer";
import Colecao from "./colecao";
import { Helmet } from "react-helmet";
interface Editora {
  ID: string;
  NOME: string;
  LOGO: string;
}
interface Colecao {
  ID: string;
  NOME: string;
  FOTO: string;
}

export default function Editorapage() {
  const { nomeEditora } = useParams<{ nomeEditora: string }>();
  const [editora, setEditora] = useState<Editora | null>(null);
  const [colecoes, setColecoes] = useState<Colecao[]>([]);

  useEffect(() => {
    if (nomeEditora) {
      console.log("Nome da editora:", nomeEditora); // Log para verificar o ID

      // Usar fetchColecao para buscar os dados da coleção
      moduleApi
        .fetchEditora(nomeEditora)
        .then((data) => {
          console.log("Dados da editora:", data); // Log para verificar os dados da coleção
          setEditora(data);
          return moduleApi.fetchColecoesPorEditora(nomeEditora);
        })
        .then((data) => {
          console.log("Dados das coleções:", data);
          setColecoes(data);
        })
        .catch((error) => {
          console.error("Erro ao buscar colecao ou quadrinhos:", error);
        });
    } else {
      console.log("ID não foi encontrado");
    }
  }, [nomeEditora]);

  return (
    <div className="background">
      <Helmet>
        <title>{`Sudocomics | ${editora?.NOME}`}</title>
      </Helmet>
      <Header />
      <div className="blur-layer"></div>
      <div className="content-layer">
        <div className="main-content">
          {/* Título do quadrinho */}
          <div className="layout-container">
            {/* Imagem do quadrinho */}
            <div
              className="comic-image"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                padding: "30px",
              }}
            >
              <img
                src={editora?.LOGO}
                alt={editora?.NOME}
                className="issue-cover"
                style={{ width: "300px" }}
              />
            </div>
            {/* Box de informações */}
          </div>
          <div className="layout-container">
            {/* Lista de quadrinhos */}
            <div className="slider_map">
              {colecoes.map((colecao) => (
                <Link to={`/colecao/${colecao.ID}`}>
                  <div key={colecao.ID} className="slider_item">
                    <img src={colecao.FOTO} height={235} alt={colecao.NOME} />
                    <div className="slider_item_content">{colecao.NOME}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
