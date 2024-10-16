import { Routes, Route } from "react-router-dom";
import "./style/App.css";

// Importação de páginas
import Home from "./pages/home";
import Login from "./pages/login";
import Browse from "./pages/browse";
import AdmLogin from "./pages/adm-login";
import AdmCadastro from "./pages/adm-cadastro";
import CadHq from "./pages/Hqcad";
import Autorpage from "./pages/autorpage";
import Favorites from "./pages/favorites";
import Avengers from "./pages/Avengers";
import Catalogue from "./pages/catalogue";
import Editorapage from "./pages/editorapage";
import Userpage from "./pages/userpage";

import ComicPage from "./pages/comicpage";
import Resultado from "./pages/resultado";
import SearchResults from "./pages/resultado";

// Componente para página 404
const NotFound = () => <h2>Página não encontrada</h2>;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<AdmCadastro />} />
        <Route path="/admlogin" element={<AdmLogin />} />
        <Route path="/cadHq" element={<CadHq />} />

        <Route path="/browse" element={<Browse />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/userpage" element={<Userpage />} />
        <Route path="/autorpage" element={<Autorpage />} />

        <Route path="/Avengers" element={<Avengers />} />
        <Route path="/editorapage" element={<Editorapage />} />
        <Route path="/catalogue/:id" element={<ComicPage />} />
        <Route path="/editorapage/:editora" element={<Editorapage />} />

        <Route path="/search-results" element={<SearchResults />} />
        {/* Rota para página 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
