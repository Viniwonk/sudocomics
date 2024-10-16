import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer";

interface Item {
  id: string;
  name: string;
  url: string;
}

const SearchResults = () => {
  const location = useLocation();
  const { results } = location.state as { results: Item[] };

  return (
    <div>
      <Header />
      <div className="slider_map">
        {results.map((item, index) => (
          <Link to={"/catalogue/" + item.id}>
            <div key={index} className="slider_item">
              <img src={item.url} height={235} alt="placeholder" />
              <div className="slider_item_content">{item.name}</div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default SearchResults;
