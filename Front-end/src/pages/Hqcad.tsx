import { useEffect, useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer";
import "../style/App.css";
import { moduleApi } from "../Api";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CadastroQuadrinhos from "../components/postInputs/Quadrinhos";
import CadastroColecao from "../components/postInputs/Colecao";
import CadastroAutor from "../components/postInputs/Autor";
import CadastroEditora from "../components/postInputs/Editora";
import { useAuth } from "../components/contexts/authContext";
import { Helmet } from "react-helmet";

interface Suggestion {
  ID: string;
  NOME: string;
}

export default function CadHq() {
  const { isLogged } = useAuth();
  return (
    <div>
      <Helmet>
        <title>{`Sudocomics | Cadastro de Catálogo`}</title>
      </Helmet>
      <Header />
      {isLogged ? (
        <div className="container-cadastro-geral">
          <Tabs>
            <TabList>
              <Tab>Quadrinho</Tab>
              <Tab>Coleção</Tab>
              <Tab>Autor</Tab>
              <Tab>Editora</Tab>
            </TabList>

            <TabPanel>
              <CadastroQuadrinhos />
            </TabPanel>

            <TabPanel>
              <CadastroColecao />
            </TabPanel>

            <TabPanel>
              <CadastroAutor />
            </TabPanel>

            <TabPanel>
              <CadastroEditora />
            </TabPanel>
          </Tabs>
        </div>
      ) : (
        <div className="page_content" style={{ height: "50vh" }}>
          <h1 style={{ textAlign: "center", color: "white" }}>
            Você não tem permissão para acessar essa página.
          </h1>
        </div>
      )}
      <Footer />
    </div>
  );
}
