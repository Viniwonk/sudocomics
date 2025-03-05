import Header from "../components/header/header";
import Footer from "../components/footer";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../style/App.css";
import { useState } from "react";
import { moduleApi } from "../Api";
import { useAuth } from "../components/contexts/authContext";
import { Helmet } from "react-helmet";

export default function AdmLogin() {
  // ** LOGIN DO ADM **
  const [email, setemail] = useState("");
  const [senha, setsenha] = useState("");
  const { isLogged, setIsLogged } = useAuth();

  // **Funções de Login **

  const loginEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setemail(event.target.value);
  };
  const loginSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
    setsenha(event.target.value);
  };

  const [toggleLogin, setToggleLogin] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const alterarTela = () => {
    setIsVisible(!isVisible);
    setTimeout(() => {
      setToggleLogin(!toggleLogin);
    }, 500); // Tempo da animação em milissegundos
  };

  const navigate = useNavigate();
  // CADASTRO

  const submitHandler = async (e: React.FormEvent<any>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const usuario = form.usuario as HTMLInputElement;
    const email = form.email as HTMLInputElement;
    const senha = form.senha as HTMLInputElement;

    if (usuario.value && email.value && senha.value) {
      console.log(usuario.value);
      console.log(email.value);
      console.log(senha.value);

      let json = await moduleApi.adcionarAdmin(
        usuario.value,
        email.value,
        senha.value
      );
      if (json) {
        alert("Criação bem sucedida");
      } else {
        alert("Erro ao criar a conta");
      }
    } else {
      alert("Preencha todos os campos");
    }
  };

  // **API**

  const admLogin = async () => {
    try {
      let json = await moduleApi.loginAdmin(email, senha);

      if (json.success) {
        alert("Login Efetuado");
        setIsLogged(true);
        navigate("/cadHQ");
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
      <Header />
      <div className="login-page">
        <div id="wrapper-login">
          <div className="left-side">
            <h1>Bem vindo de volta!</h1>
            <p className="desc-sudo">
              <span>Sudocomics</span> é mais do que apenas um catálogo de
              quadrinhos; é um universo de histórias em quadrinhos ao seu
              alcance, onde cada página é um portal para mundos extraordinários,
              e cada quadrinho é uma nova aventura esperando para ser
              descoberta. Navegue por um vasto acervo que traz não só os heróis
              clássicos, mas também as histórias independentes e inovadoras que
              transformam a leitura em uma experiência emocionante e
              inesquecível.
            </p>
            <div className="cadastro">
              <h2>
                {toggleLogin ? "Ainda não tem uma conta?" : "Já tem uma conta?"}
              </h2>

              <button className="cadastroLink" onClick={alterarTela}>
                {toggleLogin ? "Cadastrar" : "Fazer Login"}
              </button>
            </div>
          </div>
          <div className={`right-side`}>
            {toggleLogin ? (
              <div
                className={`form-login ${!isVisible ? "fade-out" : "fade-in"}`}
              >
                <Helmet>
                  <title>Sudocomics | Login</title>
                </Helmet>
                <h1 className="title-login">ADM Login</h1>
                <input
                  className="text-bar-login"
                  type="email"
                  placeholder="Email/Usuario"
                  onChange={loginEmail}
                />
                <input
                  className="text-bar-login"
                  type="password"
                  placeholder="Senha"
                  onChange={loginSenha}
                />
                <button id="login-button" type="submit" onClick={admLogin}>
                  Login
                </button>
              </div>
            ) : (
              <div
                className={`cadastro-box ${
                  !isVisible ? "fade-in" : "fade-out"
                }`}
              >
                <Helmet>
                  <title>Sudocomics | Cadastro</title>
                </Helmet>
                <form onSubmit={submitHandler}>
                  <h1>Cadastro de ADM</h1>
                  <p>Usuário</p>
                  <input
                    className="Input-Padrão"
                    type="text"
                    placeholder="Usuário"
                    name="usuario"
                  />
                  <p>Email</p>
                  <input
                    className="Input-Padrão"
                    type="Email"
                    placeholder="Email"
                    name="email"
                  />
                  <p>Senha</p>
                  <input
                    className="Input-Padrão"
                    type="Password"
                    placeholder="Senha"
                    name="senha"
                  />
                  <button className="cadastro-button" type="submit">
                    Cadastrar
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
