// Import de bibliotecas
import { Link } from "react-router-dom";

import Tape from "../tape/tape";
import "../../style/App.css";
import { useState } from "react";

export default function Footer() {
  const [easter, setEaster] = useState(0);

  const easterEgg = () => {
    setEaster(easter + 1);
    console.log(easter);
    if (easter == 11) {
      setEaster(0);
    }
  };
  return (
    <div id="foo_wrapper">
      <Tape motion={true}></Tape>
      <div className="foo_content">
        <div className="foo_left">
          <div className="foo_logo">
            <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
              <h3>Sudo-Comics</h3>
            </Link>
          </div>
        </div>
        <div className="sudo-effect">
          <div className="sudo-container" onClick={easterEgg}>
            <img
              src="..\..\images\camel.png"
              width={"200px"}
              style={{ position: "absolute", left: "-200px", top: "-30px" }}
              className={easter == 10 ? "easter" : "notEaster"}
              alt=""
            />
            <img className="sudo-text" src="..\..\images\sudoTexto.png" />
            <img className="sudo-camel" src="..\..\images\sudo.png" alt="" />
            <p className="sudo-homenagem">
              Em homenagem a <span>Allyson</span>
            </p>
          </div>
        </div>
        <div className="foo_right">
          <h3>Aviso Legal</h3>
          <p>
            <span>Sudo Comics</span> não hospeda nenhum arquivo, apenas fornece
            links para serviços de terceiros. Questões legais devem ser tratadas
            com os hosts de arquivos e provedores. <span>Sudo Comics</span> não
            é responsável por quaisquer arquivos de mídia exibidos pelos
            provedores de imagens.
          </p>
        </div>
      </div>
    </div>
  );
}
