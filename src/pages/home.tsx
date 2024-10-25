// import packages
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// import components
import Header from "../components/header/header";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Tape from "../components/tape/tape";
import CatlogCollection from "../components/catlog_colec";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Sudocomics | Home</title>
      </Helmet>
      <Header />
      <div className="page_content">
        <Carousel />
        <h1>Coleções em destaque</h1>
        <CatlogCollection numStart={0} numStop={6}></CatlogCollection>
        <Tape motion={false}></Tape>
        <h1>Novas HQs</h1>
        <CatlogCollection numStart={0} numStop={12}></CatlogCollection>
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
