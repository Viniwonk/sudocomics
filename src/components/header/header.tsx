// Importações Bibliotecas
import FeatherIcon from "feather-icons-react";
import { Link, useNavigate } from "react-router-dom";
// Importações CSS
import "../../style/App.css";
// Importações Componentes
import Tape from "../tape/tape";
// Importações Imagens
import logo from "../../images/logo.webp";
import { useEffect, useState } from "react";
import { link } from "fs";

export default function Header() {
  interface Item {
    id: string;
    name: string;
    url: string;
  }

  const [pesquisa, setPesquisa] = useState<string>("");
  const [result, setResult] = useState<Item[]>([]);
  const [sugestoes, setSugestoes] = useState<Item[]>([]);
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
    //necessario mudar para buscar no banco de dados
    const foundItems = ListaQuad.filter((item) =>
      item.name.toLowerCase().includes(pesquisa.toLowerCase())
    );
    setResult(foundItems);
    navigate("/search-results", { state: { results: foundItems } });
  };

  useEffect(() => {
    const fetchSuggestions = () => {
      if (pesquisa) {
        const matchedSuggestions = ListaQuad.filter((item) =>
          item.name.toLowerCase().includes(pesquisa.toLowerCase())
        );
        setSugestoes(matchedSuggestions);
      } else {
        setSugestoes([]);
      }
    };

    fetchSuggestions();
  }, [pesquisa]);

  //usar quando tiver banco de dados
  /*useEffect(() => {
    const fetchSugestions = async () => {
      if (pesquisa) {
        const response = await fetch("");
        const data = await response.json();
        setSugestoes(data);
      } else {
        setSugestoes([]);
      }
    };
    fetchSugestions();
  }, [pesquisa]);*/
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
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handlePesquisa();
              }
            }}
            placeholder="Pesquisar"
          />
          <button className="search-button" onClick={handlePesquisa}></button>
          {sugestoes.length > 0 && (
            <ul className="suggestions-list">
              {sugestoes.map((suggestion) => (
                <Link to={`/catalogue/${suggestion.id}`}>
                  <li
                    key={suggestion.id}
                    onClick={() => setPesquisa(suggestion.name)}
                  >
                    {suggestion.name}
                  </li>
                </Link>
              ))}
            </ul>
          )}
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
