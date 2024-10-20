export const moduleApi = {
  /* Pesquisa ID */
  pesquisaID: async (nome: string) => {
    let response = await fetch(
      `http://localhost:3001/quadrinhos/resultados-de-busca?nome=${nome}`
    );
    try {
      let json = await response.json();
      return json;
    } catch (error) {
      console.error("Resposta não é JSON", error);
    }
  },
  search: async (term: string) => {
    const response = await fetch(`/quadrinhos/search?term=${term}`);
    try {
      let json = await response.json();
      return json;
    } catch (error) {
      console.error("Resposta não é JSON", error);
    }
  },
  /* Quadrinho DM */
  adicionarQuadrinho: async (
    edicao: string,
    colecao: string,
    lancamento: string,
    imagemCapa: string,
    editora: string,
    uploadedBy: string
  ) => {
    let response = await fetch("", {
      method: "POST",
      body: JSON.stringify({
        edicao,
        colecao,
        lancamento,
        imagemCapa,
        editora,
        uploadedBy,
      }),
      headers: { "Content-Type": "application/json" },
    });
    let json = await response.json();
    console.log(json);
    return json;
  },
  alteraQuadrinho: async (
    edicao: string,
    colecao: string,
    lancamento: string,
    imagemCapa: string,
    editora: string,
    uploadedBy: string
  ) => {
    let response = await fetch("", {
      method: "POST",
      body: JSON.stringify({
        edicao,
        colecao,
        lancamento,
        imagemCapa,
        editora,
        uploadedBy,
      }),
      headers: { "Content-Type": "application/json" },
    });
    let json = await response.json();
    console.log(json);
    return json;
  },
  removeQuadrinho: async () => {
    let response = await fetch("");
    let json = await response.json();
    return json;
  },

  /*Editora DM*/
  adcionarEditora: async (nome: string, logo: string, quadrinho: string) => {
    let response = await fetch("", {
      method: "POST",
      body: JSON.stringify({
        nome,
        logo,
        quadrinho,
      }),
      headers: { "Content-Type": "application/json" },
    });
    let json = await response.json();
    console.log(json);
    return json;
  },
  alteraEditora: async (nome: string, logo: string, quadrinho: string) => {
    let response = await fetch("", {
      method: "POST",
      body: JSON.stringify({
        nome,
        logo,
        quadrinho,
      }),
      headers: { "Content-Type": "application/json" },
    });
    let json = await response.json();
    console.log(json);
    return json;
  },
  removeEditora: async () => {
    let response = await fetch("");
    let json = await response.json();
    return json;
  },

  /*Autor DM*/
  adcionarAutor: async (nome: string, foto: string, quadrinho: string) => {
    let response = await fetch("", {
      method: "POST",
      body: JSON.stringify({
        nome,
        foto,
        quadrinho,
      }),
      headers: { "Content-Type": "application/json" },
    });
    let json = await response.json();
    console.log(json);
    return json;
  },
  alteraAutor: async (nome: string, foto: string, quadrinho: string) => {
    let response = await fetch("", {
      method: "POST",
      body: JSON.stringify({
        nome,
        foto,
        quadrinho,
      }),
      headers: { "Content-Type": "application/json" },
    });
    let json = await response.json();
    console.log(json);
    return json;
  },
  removeAutor: async () => {
    let response = await fetch("");
    let json = await response.json();
    return json;
  },

  /*Admin DM*/
  adcionarAdmin: async (NOME: string, EMAIL: string, SENHA: string) => {
    let response = await fetch("http://localhost:3001/admin", {
      method: "POST",
      body: JSON.stringify({
        NOME,
        EMAIL,
        SENHA,
      }),
      headers: { "Content-Type": "application/json" },
    });
    let json = await response.json();
    console.log(json);
    return json;
  },
  loginAdmin: async (EMAIL: string, SENHA: string) => {
    let response = await fetch("http://localhost:3001/admin/login", {
      method: "POST",
      body: JSON.stringify({
        EMAIL,
        SENHA,
      }),
      headers: { "Content-Type": "application/json" },
    });
    let json = await response.json();
    console.log(json);
    return json;
  },
};
