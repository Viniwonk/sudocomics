import { useParams } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer";
import "../style/App.css";
import { useEffect, useState } from "react";
import { moduleApi } from "../Api";

interface Quad {
  ID: string;
  NOME: string;
  EDICAO: string;
  LANCAMENTO: string;
  ID_EDITORA: string;
  ID_AUTOR: string;
}

export default function ComicPage() {
  const { id } = useParams<{ id: string }>();
  const [comic, setComic] = useState<Quad[]>([]);

  useEffect(() => {
    async function fetchComic() {
      try {
        const response = await moduleApi.fetchQuadrinho();
        const data: Quad[] = await response.json();
        setComic(data);
      } catch (error) {
        console.error("Erro ao buscar o quadrinho:", error);
      }
    }

    fetchComic();
  }, [id]);

  if (comic.length === 0) {
    return <div>Página não encontrada</div>;
  }

  return (
    <div className="background">
      <Header />
      <div className="blur-layer"></div>
      <div className="content-layer">
        <div className="main-content">
          {/* Título do quadrinho */}
          <div className="comic-title">
            <h1>{comic[0].NOME}</h1>
          </div>
          <div className="layout-container">
            {/* Imagem do quadrinho */}
            <div className="comic-image">
              <img
                src={comic[0].ID}
                alt={comic[0].NOME}
                className="issue-cover"
              />
            </div>
            {/* Box de informações */}
            <div className="info-box">
              <h3>Informações</h3>
              <p>
                <strong>Edição:</strong> {comic[0].EDICAO}
              </p>
              <p>
                <strong>Data de Lançamento:</strong> {comic[0].LANCAMENTO}
              </p>
              <p>
                <strong>Editora:</strong> {comic[0].ID_EDITORA}
              </p>
              <p>
                <strong>Autor:</strong> {comic[0].ID_AUTOR}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
