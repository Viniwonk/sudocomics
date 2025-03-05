import { Link, useParams } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer";
import "../style/App.css";
import { useEffect, useState } from "react";
import { moduleApi } from "../Api";
import Editorapage from "./editorapage";
import { Helmet } from "react-helmet";

interface Quad {
  ID: string;
  colecao: {
    NOME: string;
  };
  NOME: string;
  EDICAO: string;
  SINOPSE: string;
  IMAGEM_CAPA: string;
  LANCAMENTO: string;
  editora: {
    NOME: string;
    LOGO: string;
  };
  autor: {
    NOME: string;
  };
}

export default function QuadrinhosPage() {
  const { id } = useParams<{ id: string }>();
  const [listaQuadrinho, setListaQuadrinho] = useState<Quad | undefined>();

  useEffect(() => {
    if (id) {
      console.log(id);
      // Usar fetchQuadrinho para buscar os dados
      moduleApi
        .fetchQuadrinho(id)
        .then((data) => setListaQuadrinho(data))
        .catch((error) => console.error("Erro ao buscar quadrinhos:", error));
    }
  }, [id]);

  return (
    <div className="background">
      <Helmet>
        <title>{`Sudocomics | ${listaQuadrinho?.colecao.NOME} #${listaQuadrinho?.EDICAO}`}</title>
      </Helmet>
      <Header />
      <div className="blur-layer"></div>
      <div className="content-layer">
        <div className="main-content">
          {/* Título do quadrinho */}
          <div className="comic-title">
            <h1>
              {listaQuadrinho?.colecao.NOME} #{listaQuadrinho?.EDICAO}
            </h1>
          </div>
          <div className="layout-container">
            {/* Imagem do quadrinho */}
            <div className="comic-image">
              <img
                src={listaQuadrinho?.IMAGEM_CAPA}
                alt={listaQuadrinho?.NOME}
                className="issue-cover"
              />
            </div>
            {/* Box de informações */}
            <div className="info-box">
              <div className="logo"></div>
              <h3>Informações</h3>
              <p>
                <strong>Data de Lançamento:</strong>{" "}
                {listaQuadrinho?.LANCAMENTO}
              </p>
              <p>
                <strong>Editora:</strong> {listaQuadrinho?.editora.NOME}
              </p>
              <p>
                <strong>Autor:</strong> {listaQuadrinho?.autor.NOME}
              </p>
              <p>
                <strong>Sinopse:</strong> {listaQuadrinho?.SINOPSE}
              </p>
            </div>
          </div>
          <div className="layout-container">{/* Lista de quadrinhos */}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
