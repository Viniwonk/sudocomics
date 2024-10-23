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
  pesquisaAdmin: async (nome: string) => {
    let response = await fetch(
      `http://localhost:3001/admin/resultados-de-busca?nome=${nome}`
    );
    try {
      let json = await response.json();
      return json;
    } catch (error) {
      console.error("Resposta não é JSON", error);
    }
  },
  pesquisaAutor: async (nome: string) => {
    let response = await fetch(
      `http://localhost:3001/autor/resultados-de-busca?nome=${nome}`
    );
    try {
      let json = await response.json();
      return json;
    } catch (error) {
      console.error("Resposta não é JSON", error);
    }
  },

  pesquisaColecao: async (term: string) => {
    try {
      const response = await fetch(
        `http://localhost:3001/colecao/resultados-de-busca?nome=${term}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar coleções");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar coleções:", error);
      return [];
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

  fetchQuadrinho: async () => {
    const response = await fetch(`http://localhost:3001/quadrinhos/`);
    try {
      let json = await response.json();
      return json;
    } catch (error) {
      console.error("Resposta não é JSON", error);
    }
  },

  adicionarQuadrinho: async (
    EDICAO: number,
    COLECAO: string,
    LANCAMENTO: string,
    IMAGEM_CAPA: string,
    EDITORA: string,
    UPLOADED_BY: string,
    AUTOR: string
  ) => {
    let response = await fetch("http://localhost:3001/quadrinhos", {
      method: "POST",
      body: JSON.stringify({
        EDICAO,
        COLECAO,
        LANCAMENTO,
        IMAGEM_CAPA,
        EDITORA,
        UPLOADED_BY,
        AUTOR,
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
  adcionarEditora: async (NOME: string, LOGO: string) => {
    let response = await fetch("http://localhost:3001/editora", {
      method: "POST",
      body: JSON.stringify({
        NOME,
        LOGO,
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
  adcionarAutor: async (NOME: string, FOTO: string) => {
    let response = await fetch("http://localhost:3001/autor", {
      method: "POST",
      body: JSON.stringify({
        NOME,
        FOTO,
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

  adicionarColecao: async (
    NOME: string,
    LANCAMENTO: string,
    FOTO: string,
    SINOPSE: string,
    EDITORA: string
  ) => {
    let response = await fetch("http://localhost:3001/colecao", {
      method: "POST",
      body: JSON.stringify({
        NOME,
        LANCAMENTO,
        FOTO,
        SINOPSE,
        EDITORA,
      }),
      headers: { "Content-Type": "application/json" },
    });
    let json = await response.json();
    console.log(json);
    return json;
  },
};
//   fetchSuggestions: async (url: string, term: string) => {
//     try {
//       const response = await fetch(`${url}?nome=${term}`, {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       });

//       if (!response.ok) {
//         const errorMessage = await response.text();
//         console.error(errorMessage);
//         throw new Error("Erro ao buscar sugestões");
//       }

//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error("Erro ao buscar sugestões:", error);
//       return [];
//     }
//   },
// }
