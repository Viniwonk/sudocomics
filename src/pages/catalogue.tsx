import Header from "../components/header/header";
import Footer from "../components/footer";
import "../style/catlogue_style.css";
import CatlogCollection from "../components/catlog_colec";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Catalogue() {
  interface Item {
    ID: string;
    NOME: string;
    FOTO: string;
  }

  const [ListaColecao, setListaColecao] = useState<Item[]>([]);

  useEffect(() => {
    fetch("https://sudocomics.onrender.com/colecao")
      .then((response) => response.json())
      .then((data) => setListaColecao(data))
      .catch((error) => console.error("Erro:", error));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Sudocomics | Catálogo</title>
      </Helmet>
      <Header />
      <div className="page_content">
        <h1 style={{ paddingTop: "50px" }}>Coleções</h1>
        <div className="map">
          {ListaColecao.map((item, index) => (
            <div key={item.ID}>
              <Link to={"/colecao/" + item.ID}>
                <div className="slider_item">
                  <img src={item.FOTO} height={235} alt="placeholder" />
                  <div className="slider_item_content">{item.NOME}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
