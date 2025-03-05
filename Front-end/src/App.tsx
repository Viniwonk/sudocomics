import { Routes, Route } from "react-router-dom";
import "./style/App.css";

// Importação de páginas
import Home from "./pages/home";
import Login from "./pages/login";
import AdmLogin from "./pages/adm-login";
import AdmCadastro from "./pages/adm-cadastro";
import CadHq from "./pages/Hqcad";
import Autorpage from "./pages/autorpage";
import Catalogue from "./pages/catalogue";
import Editorapage from "./pages/editorapage";
import Userpage from "./pages/userpage";

import ComicPage from "./pages/comicpage";
import Resultado from "./pages/resultado";
import SearchResults from "./pages/resultado";
import Header from "./components/header/header";
import Footer from "./components/footer";
import Colecao from "./pages/colecao";
import { useEffect } from "react";

// Componente para página 404
const NotFound = () => {
  return (
    <div>
      <Header />
      <h2
        style={{
          color: "white",
          height: "200px",
          textAlign: "center",
          margin: "50px",
        }}
      >
        Página não encontrada
      </h2>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<AdmCadastro />} />
        <Route path="/admlogin" element={<AdmLogin />} />
        <Route path="/cadHq" element={<CadHq />} />
        <Route path="/colecao/:id" element={<Colecao />}></Route>
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/userpage" element={<Userpage />} />
        <Route path="/autorpage" element={<Autorpage />} />

        <Route path="/editorapage" element={<Editorapage />} />
        <Route path="/catalogue/:id" element={<ComicPage />} />
        <Route path="/editorapage/:nomeEditora" element={<Editorapage />} />

        <Route path="/search-results" element={<SearchResults />} />
        {/* Rota para página 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
