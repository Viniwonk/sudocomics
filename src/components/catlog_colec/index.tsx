import { useEffect, useState } from "react";
import CatlogComic from "../catlog_comic";
import { Link } from "react-router-dom";

export default function CatlogCollection() {
  interface Item {
    ID: string;
    NOME: string;
    FOTO: string;
  }

  const [ListaColecao, setListaColecao] = useState<Item[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/colecao")
      .then((response) => response.json())
      .then((data) => setListaColecao(data))
      .catch((error) => console.error("Erro:", error));
  }, []);

  return (
    <div>
      <div className="slider_map">
        {ListaColecao.map((item) => (
          <Link to={"/colecao/" + item.ID} key={item.ID}>
            <div className="slider_item">
              <img src={item.FOTO} height={235} alt="placeholder" />
              <div className="slider_item_content">{item.NOME}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
