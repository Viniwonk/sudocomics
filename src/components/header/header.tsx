// Importações Bibliotecas
import FeatherIcon from "feather-icons-react";
import { Link, useNavigate } from "react-router-dom";
// Importações CSS
import "../../style/App.css";
// Importações Componentes
import Tape from "../tape/tape";
// Importações Imagens
import logo from "../../images/logo.webp";
import { useState } from "react";

export default function Header() {
  interface Item {
    id: string;
    name: string;
    url: string;
  }

  const [pesquisa, setPesquisa] = useState<string>("");
  const [result, setResult] = useState<Item[]>([]);
  const navigate = useNavigate();

  const ListaQuad: Item[] = [
    {
      id: "dc1",
      name: "Batman Vol. 2: The Bat-Man of Gotham TP",
      url: "/quadrinhos/Batman.jpg",
    },
    {
      id: "dc2",
      name: "Batman / Superman: Worlds Finest #30",
      url: "/quadrinhos/bbb.jpg",
    },
    { id: "mvl1", name: "Phoenix #2", url: "/quadrinhos/Fenix.jpg" },
    {
      id: "mvl2",
      name: "Miles Morales: Spider-Man Annual #1",
      url: "/quadrinhos/Miles Morales.jpg",
    },
    {
      id: "mvl3",
      name: "The Incredible Hulk Epic Collection: Ground Zero TP",
      url: "/quadrinhos/Hulk.jpg",
    },
  ];

  const handlePesquisa = () => {
    const foundItems = ListaQuad.filter((item) =>
      item.name.toLowerCase().includes(pesquisa.toLowerCase())
    );
    setResult(foundItems);
    navigate("/search-results", { state: { results: foundItems } });
  };

  return (
    <div className="head_wrapper">
      <div className="head">
        <div>
          <Link to="/">
            <img id="head_logo" src={logo} alt="" />
          </Link>
        </div>
        <div>
          <input
            className="search-bar"
            type="text"
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handlePesquisa();
              }
            }}
            placeholder="Pesquisar"
          />
        </div>
        <div className="head_botoes">
          <Link to={"/admlogin"}>
            <div className="head_icon">
              <FeatherIcon icon="user" />
            </div>
          </Link>
        </div>
      </div>
      <Tape></Tape>
    </div>
  );
}
