import Header from "../components/header/header";
import Footer from "../components/footer";
import "../style/App.css";

export default function Login() {
  return (
    <div className="conteiner-login-fundo">
      <Header></Header>
      <div className="conteiner-login">
        <h1>Login</h1>
        <input className="text-bar-login"  type="text" />
      </div>
      <Footer></Footer>
    </div>
  );
}
