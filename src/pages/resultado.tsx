import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer";

interface Item {
  ID: string;
  NOME: string;
  URL: string;
}

const SearchResults = () => {
  const location = useLocation();
  const { results } = location.state as { results: Item[] };

  return (
    <div>
      <Header />
      <div className="slider_map">
        {results.map((item) => (
          <Link to={"/catalogue/" + item.ID} key={item.ID}>
            <div className="slider_item">
              <img src={item.URL} height={235} alt="placeholder" />
              <div className="slider_item_content">{item.NOME}</div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default SearchResults;
