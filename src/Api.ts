export const moduleApi ={
    /* Pesquisa ID */

    pesquisaID: async() =>{
        let response = await fetch('');
        let json = await response.json();
        return json
    },
    
 
    /* Quadrinho DM */
    adicionarQuadrinho: async(edicao:string,colecao:string,lancamento:string,imagemCapa:string, editora:string, uploadedBy:string) =>{
        let response = await fetch ('',{
        method:'POST',
        body:JSON.stringify({
            edicao,
            colecao,
            lancamento,
            imagemCapa,
            editora,
            uploadedBy,
        }),
        headers:{'Content-Type':'application/json'}
    })
    let json = await response.json();
    console.log(json);
    return json;
},
    alteraQuadrinho: async(edicao:string,colecao:string,lancamento:string,imagemCapa:string, editora:string, uploadedBy:string) =>{
        let response = await fetch ('',{
        method:'POST',
        body:JSON.stringify({
            edicao,
            colecao,
            lancamento,
            imagemCapa,
            editora,
            uploadedBy,
        }),
        headers:{'Content-Type':'application/json'}
    })
    let json = await response.json();
    console.log(json);
    return json;
},
    removeQuadrinho: async() =>{
        let response = await fetch('');
        let json = await response.json();
        return json
    },



    /*Editora DM*/
    adcionarEditora:async(nome:string,logo:string,quadrinho:string) =>{
        let response = await fetch ('',{
        method:'POST',
        body:JSON.stringify({
            nome,
            logo,
            quadrinho,
        }),
        headers:{'Content-Type':'application/json'}
    })
    let json = await response.json();
    console.log(json);
    return json;
},
    alteraEditora:async(nome:string,logo:string,quadrinho:string) =>{
        let response = await fetch ('',{
        method:'POST',
        body:JSON.stringify({
            nome,
            logo,
            quadrinho,
        }),
        headers:{'Content-Type':'application/json'}
    })
    let json = await response.json();
    console.log(json);
    return json;
},
    removeEditora: async() =>{
        let response = await fetch('');
        let json = await response.json();
        return json
    },

    /*Autor DM*/

    adcionarAutor:async(nome:string,foto:string,quadrinho:string) =>{
        let response = await fetch ('',{
        method:'POST',
        body:JSON.stringify({
            nome,
            foto,
            quadrinho,
        }),
        headers:{'Content-Type':'application/json'}
    })
    let json = await response.json();
    console.log(json);
    return json;
},
    alteraAutor:async(nome:string,foto:string,quadrinho:string) =>{
        let response = await fetch ('',{
        method:'POST',
        body:JSON.stringify({
            nome,
            foto,
            quadrinho,
        }),
        headers:{'Content-Type':'application/json'}
    })
    let json = await response.json();
    console.log(json);
    return json;
},
    removeAutor: async() =>{
        let response = await fetch('');
        let json = await response.json();
        return json
    },

    /*Admin DM*/
    adcionarAdmin:async(nome:string,email:string,senha:string) =>{
        let response = await fetch ('',{
        method:'POST',
        body:JSON.stringify({
            nome,
            email,
            senha,
        }),
        headers:{'Content-Type':'application/json'}
    })
    let json = await response.json();
    console.log(json);
    return json;
},
    loginAdmin:async(email:string,senha:string) =>{
        let response = await fetch ('',{
            method:'POST',
            body:JSON.stringify({
                email,
                senha,
                }),
                headers:{'Content-Type':'application/json'}
        })
        let json = await response.json();
    console.log(json);
    return json;
    }
}