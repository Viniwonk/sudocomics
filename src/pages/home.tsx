// import packages
import React from "react";
import { Link } from "react-router-dom";

// import components
import Header from "../components/header/header";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Tape from "../components/tape/tape";
import CatlogCollection from "../components/catlog_colec";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="page_content">
        <Carousel />
        <h1>Coleções em destaque</h1>
        <CatlogCollection></CatlogCollection>
        <h1>Novas HQs</h1>
        <div className="home_row">
          <CatlogCollection></CatlogCollection>
        </div>
        <ul>
          <h1>
            <Link to="/catalogue">
              <button className="butCat">VER MAIS</button>
            </Link>
          </h1>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
