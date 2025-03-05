import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header/header";
import { moduleApi } from "../Api";
import { Helmet } from "react-helmet";

export default function Colecao() {
  interface Colecao {
    ID: string;
    NOME: string;
    FOTO: string;
    SINOPSE: string;
    LANCAMENTO: string;
    editora: {
      ID: string;
      NOME: string;
      LOGO: string;
    };
  }

  interface Quadrinhos {
    ID: string;
    NOME: string;
    IMAGEM_CAPA: string;
    EDICAO: number;
  }

  const { id } = useParams<{ id: string }>(); // Obtendo o parâmetro 'id' da URL
  const [listaQuadrinho, setListaQuadrinho] = useState<Quadrinhos[]>([]);
  const [colecao, setColecao] = useState<Colecao | undefined>();

  useEffect(() => {
    if (id) {
      console.log("ID da coleção:", id); // Log para verificar o ID

      // Usar fetchColecao para buscar os dados da coleção
      moduleApi
        .fetchColecao(id)
        .then((data) => {
          console.log("Dados da coleção:", data); // Log para verificar os dados da coleção
          setColecao(data);

          // Usar fetchQuadrinhoByColecao para buscar os quadrinhos da coleção pelo nome da coleção
          return moduleApi.fetchQuadrinhoByColecao(data.NOME);
        })
        .then((quadrinhosData) => {
          console.log("Dados dos quadrinhos:", quadrinhosData); // Log para verificar os dados dos quadrinhos
          setListaQuadrinho(quadrinhosData);
        })
        .catch((error) => {
          console.error("Erro ao buscar colecao ou quadrinhos:", error);
        });
    } else {
      console.log("ID não foi encontrado");
    }
  }, [id]);

  console.log("Colecao atual:", colecao);
  console.log("Lista de Quadrinhos:", listaQuadrinho);

  return (
    <div className="background">
      <Helmet>
        <title>{`Sudocomics | ${colecao?.NOME}`}</title>
      </Helmet>
      <Header />
      <div className="blur-layer"></div>
      <div className="content-layer">
        <div className="main-content">
          {/* Título do quadrinho */}
          <div className="comic-title">
            <h1>{colecao?.NOME}</h1>
          </div>
          <div className="layout-container">
            {/* Imagem do quadrinho */}
            <div className="comic-image">
              <img
                src={colecao?.FOTO}
                alt={colecao?.NOME}
                className="issue-cover"
              />
            </div>
            {/* Box de informações */}
            <div className="info-box">
              <div className="logo">
                <Link to={`/editorapage/${colecao?.editora.NOME}`}>
                  <img height={100} src={colecao?.editora.LOGO} alt="" />
                </Link>
              </div>
              <h3>Informações</h3>
              <p>
                <strong>Editora:</strong> {colecao?.editora?.NOME}
              </p>
              <p>
                <strong>Lançamento:</strong> {colecao?.LANCAMENTO}
              </p>
              <p>
                <strong>Sinopse:</strong> {colecao?.SINOPSE}
              </p>
            </div>
          </div>
          {/* Lista de quadrinhos */}
          <div className="slider_map">
            {Array.isArray(listaQuadrinho) &&
              listaQuadrinho
                .sort((a, b) => a.EDICAO - b.EDICAO)
                .map((quadrinho) => (
                  <Link to={`/catalogue/ID-${quadrinho.ID}`} key={quadrinho.ID}>
                    <div className="slider_item">
                      <img
                        src={quadrinho.IMAGEM_CAPA}
                        height={260}
                        alt={quadrinho.NOME}
                      />
                      <div className="slider_item_content">
                        {colecao?.NOME} #{quadrinho.EDICAO}
                      </div>
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
