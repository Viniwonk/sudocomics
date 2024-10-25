import Header from "../components/header/header";
import Footer from "../components/footer";
import "../style/catlogue_style.css";
import CatlogCollection from "../components/catlog_colec";

export default function Catalogue() {
  return (
    <div>
      <Header />
      <div className="page_content">
        <h1 style={{ paddingTop: "50px" }}>Coleções</h1>
        <CatlogCollection numStart={0} numStop={20}></CatlogCollection>
      </div>
      <Footer />
    </div>
  );
}
