export const moduleApi = {
  /* Pesquisa ID */
  pesquisaID: async (nome: string) => {
    let response = await fetch(
      `https://sudocomics.onrender.com/quadrinhos/resultados-de-busca?nome=${nome}`
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
      `https://sudocomics.onrender.com/admin/resultados-de-busca?nome=${nome}`
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
      `https://sudocomics.onrender.com/autor/resultados-de-busca?nome=${nome}`
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
        `https://sudocomics.onrender.com/colecao/resultados-de-busca?nome=${term}`,
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

  fetchQuadrinho: async (id: string) => {
    const response = await fetch(
      `https://sudocomics.onrender.com/quadrinhos/${id}`
    );
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
    SINOPSE: string,
    EDITORA: string,
    UPLOADED_BY: string,
    AUTOR: string
  ) => {
    console.log(
      "EDICAO",
      EDICAO,
      "COLECAO",
      COLECAO,
      "LANCAMENTO",
      LANCAMENTO,
      "IMAGEM_CAPA",
      IMAGEM_CAPA,
      "SINOPSE",
      SINOPSE,
      "EDITORA",
      EDITORA,
      "UPLOADED_BY",
      UPLOADED_BY,
      "AUTOR",
      AUTOR
    );
    let response = await fetch("https://sudocomics.onrender.com/quadrinhos", {
      method: "POST",
      body: JSON.stringify({
        EDICAO,
        COLECAO,
        LANCAMENTO,
        IMAGEM_CAPA,
        SINOPSE,
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
    let response = await fetch("https://sudocomics.onrender.com/editora", {
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
    let response = await fetch("https://sudocomics.onrender.com/autor", {
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
    let response = await fetch("https://sudocomics.onrender.com/admin", {
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
    let response = await fetch("https://sudocomics.onrender.com/admin/login", {
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
    let response = await fetch("https://sudocomics.onrender.com/colecao", {
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
  // Coleção

  fetchColecao: async (id: string) => {
    try {
      const response = await fetch(
        `https://sudocomics.onrender.com/colecao/ID-${id}`
      ); // Ajuste a URL conforme necessário
      if (!response.ok) {
        throw new Error("Erro ao buscar coleção");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro:", error);
      throw error;
    }
  },

  // Editora

  fetchColecoesPorEditora: async (nomeEditora: string) => {
    const response = await fetch(
      `https://sudocomics.onrender.com/colecao/editora/${nomeEditora}`
    );
    const data = await response.json();
    return data;
  },

  fetchEditora: async (id: string) => {
    const response = await fetch(
      `https://sudocomics.onrender.com/editora/ID-${id}`
    );
    try {
      let json = await response.json();
      return json;
    } catch (error) {
      console.error("Resposta não é JSON", error);
    }
  },
  // Quadrinho

  fetchQuadrinhoByColecao: async (colecaoName: string) => {
    const response = await fetch(
      `https://sudocomics.onrender.com/quadrinhos/colecao/${colecaoName}`
    );
    const data = await response.json();
    return data;
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
