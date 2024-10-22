import FeatherIcon from "feather-icons-react";
import { Link, useNavigate } from "react-router-dom";
import "../../style/App.css";
import Tape from "../tape/tape";
import logo from "../../images/logo.webp";
import { useEffect, useState } from "react";
import { moduleApi } from "../../Api";
import useFetchSuggestions from "../../hooks/useFetchSuggestions";
import InputBar from "../inputBar";

export default function Header() {
  const [pesquisa, setPesquisa] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const sugestoes = useFetchSuggestions(
    "http://localhost:3001/colecao/resultados-de-busca",
    pesquisa
  );

  const handleSelectedSuggestion = (suggestion: {
    ID: string;
    NOME: string;
  }) => {
    setPesquisa(suggestion.NOME);
    setShowSuggestions(false);
    navigate(`/catalogue/${suggestion.ID}`);
  };

  const handlePesquisa = async () => {
    console.log("Pesquisando por:", pesquisa);
    const foundItems = await moduleApi.pesquisaColecao(pesquisa);
    if (foundItems.length) {
      navigate("/search-results", { state: { results: foundItems } });
    } else {
      alert("Nenhum item encontrado");
    }
  };

  return (
    <div className="head_wrapper">
      <div className="head">
        <div>
          <Link to="/">
            <img id="head_logo" src={logo} alt="" />
          </Link>
        </div>
        <InputBar
          url="http://localhost:3001/colecao/resultados-de-busca"
          onSelect={handleSelectedSuggestion}
          placeholder="Pesquisar"
          onChange={setPesquisa}
        />
        <div className="head_botoes">
          <Link to={"/admlogin"}>
            <div className="head_icon">
              <FeatherIcon icon="user" />
            </div>
          </Link>
        </div>
      </div>
      <Tape />
    </div>
  );
}
