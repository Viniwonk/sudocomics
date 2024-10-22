import FeatherIcon from "feather-icons-react";
import { Link, useNavigate } from "react-router-dom";
import "../../style/App.css";
import Tape from "../tape/tape";
import logo from "../../images/logo.webp";
import { useEffect, useState } from "react";
import { moduleApi } from "../../Api";

export default function Header() {
  interface Item {
    ID: string;
    COLECAO: string;
    IMAGEM_CAPA: string;
  }

  const [pesquisa, setPesquisa] = useState<string>("");
  const [result, setResult] = useState<Item[]>([]);
  const [sugestoes, setSugestoes] = useState<Item[]>([]);
  const navigate = useNavigate();

  const handlePesquisa = async () => {
    console.log("Pesquisando por:", pesquisa);
    const foundItems = await moduleApi.pesquisaID(pesquisa);
    if (foundItems.length) {
      setResult(foundItems);
      navigate("/search-results", { state: { results: foundItems } });
    } else {
      alert("Nenhum item encontrado");
    }
  };

  useEffect(() => {
    const retornaPesquisa = async () => {
      const json = await moduleApi.fetchSuggestions(pesquisa);
      const matchedSuggestions = json.filter((item: Item) =>
        item.COLECAO.toLowerCase().includes(pesquisa.toLowerCase())
      );
      setSugestoes(matchedSuggestions);
    };
  }, [pesquisa]);

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
                <Link to={`/catalogue/${suggestion.ID}`} key={suggestion.ID}>
                  <li onClick={() => setPesquisa(suggestion.COLECAO)}>
                    {suggestion.COLECAO}
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
