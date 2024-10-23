// Import de bibliotecas
import { Link } from "react-router-dom";

import Tape from "../tape/tape";
import "../../style/App.css";

export default function Footer() {
  return (
    <div id="foo_wrapper">
      <Tape></Tape>
      <div className="foo_content">
        <div className="foo_left">
          <div className="foo_logo">
            <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
              <h3>Sudo-Comics</h3>
            </Link>
          </div>
          <p>
            Leia seus quadrinhos e mangás favoritos com o{" "}
            <span>Sudo Comics</span>
          </p>
        </div>
        <div className="sudo-effect">
          <img className="sudo-text" src="..\..\images\sudoTexto.png" />
          <img className="sudo-camel" src="..\..\images\sudo.png" alt="" />
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
