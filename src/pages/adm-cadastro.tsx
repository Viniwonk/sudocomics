import Header from "../components/header/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import React from "react";
import { moduleApi } from "../Api";
import { Helmet } from "react-helmet";

export default function AdmCadastro() {
  // **API**
  const submitHandler = async (e: React.FormEvent<any>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const usuario = form.usuario as HTMLInputElement;
    const email = form.email as HTMLInputElement;
    const senha = form.senha as HTMLInputElement;

    if (usuario && email && senha) {
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

  return (
    <div>
      <Helmet>
        <title>Sudocomics | Cadastro de Catálogo</title>
      </Helmet>
      <Header></Header>
      <div className="cadastro-wrapper">
        <div className="cadastro-box">
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
            <Link className="fazerLogin" to="/admlogin">
              Fazer Login
            </Link>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
