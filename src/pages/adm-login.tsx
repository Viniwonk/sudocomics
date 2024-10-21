import Header from "../components/header/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import "../style/App.css";
import { useState } from "react";
import { moduleApi } from "../Api";

export default function AdmLogin() {
  // ** LOGIN DO ADM **
  const [email, setemail] = useState("");
  const [senha, setsenha] = useState("");

  // **Funções de Login **

  const loginEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setemail(event.target.value);
  };
  const loginSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
    setsenha(event.target.value);
  };

  // **API**

  const admLogin = async () => {
    try {
      let json = await moduleApi.loginAdmin(email, senha);

      if (json.success) {
        alert("Login Efetuado");
      } else {
        alert("Falha ao fazer o login, tente novamente");
      }
    } catch (error) {
      console.error("Erro no login:", error);
      alert("Falha ao fazer o login, tente novamente");
    }
  };
  return (
    <div>
      <Header></Header>
      <div className="login-page">
        <div id="wrapper-login">
          <div className="left-side">
            <h1>Bem vindo de volta!</h1>
            <p>Sudocomics é seu catálogo definitivo de quadrinhos</p>
            <div className="cadastro">
              <h2>Ainda não tem uma conta?</h2>
              <Link className="cadastroLink" to="/cadastro">
                Cadastrar
              </Link>
            </div>
          </div>
          <div className="right-side">
            <div className="form-login">
              <h1 className="title-login">ADM Login</h1>
              <input
                className="text-bar-login"
                type="Email"
                placeholder="Email/Usuario"
                onChange={loginEmail}
              />
              <input
                className="text-bar-login"
                type="Password"
                placeholder="Senha"
                onChange={loginSenha}
              />
              <button id="login-button" type="submit" onClick={admLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
