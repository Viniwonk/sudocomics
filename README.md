# 📚 Sudocomics

Este projeto foi criado com o objetivo de democratizar o acesso a quadrinhos, tornando a cultura de HQs mais acessível à população brasileira. 🎨✨

---

## 🚀 Visão Geral

**Sudocomics** é uma aplicação desenvolvida em **React** e **TypeScript**, que funciona como uma biblioteca digital de quadrinhos. Sua missão é promover a leitura e o entretenimento através de uma plataforma interativa e intuitiva.

---

## 🌟 Funcionalidades

- 📖 Catálogo interativo com títulos variados de quadrinhos.
- 🔍 Funcionalidade de busca rápida e filtros avançados.
- 🧩 Interface amigável e totalmente responsiva.
- 🛠️ Construída com **React** e **TypeScript** para alta performance e escalabilidade.

---

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface.
- **TypeScript**: Superconjunto de JavaScript, garantindo segurança e tipagem.
- **Styled Components**: Estilização dinâmica de componentes.
- **Axios**: Consumo de APIs de maneira eficiente.
- **React Router**: Navegação entre páginas.
- **MySQL**: Banco de dados relacional para armazenar informações.
- **XAMPP**: Ferramenta para gerenciar o servidor MySQL localmente.

---

## 🗂️ Banco de Dados

O projeto utiliza **MySQL** como banco de dados para armazenar informações sobre os quadrinhos. É necessário o uso do **XAMPP** para rodar o banco de dados localmente.

### 📥 Como Adicionar Seus Próprios Quadrinhos

Os quadrinhos armazenados no banco de dados local permitem personalização. Qualquer pessoa pode adicionar os próprios quadrinhos seguindo os passos abaixo:

1. **Certifique-se de que as imagens e informações dos quadrinhos estejam organizadas**:
   - Você precisará de um caminho de imagem e informações (como título, autor, etc.) para cada quadrinho.

2. **Configure o banco de dados local**:
   - Insira os detalhes no banco de dados MySQL diretamente pelo **phpMyAdmin** ou um script SQL:
     ```sql
     INSERT INTO comics (id, titulo, autor, imagem)
     VALUES (1, 'Nome do Quadrinho', 'Nome do Autor', 'caminho/para/imagem.jpg');
     ```

3. **Reinicie o servidor local** para carregar as alterações:
   ```bash
   npm start


## ⚙️ Configuração do Banco de Dados com XAMPP

1. **Instale o XAMPP**:
   - Faça o download do [XAMPP](https://www.apachefriends.org/index.html) e instale-o na sua máquina.

2. **Inicie os serviços necessários**:
   - No painel de controle do XAMPP, inicie os módulos **Apache** e **MySQL**.

3. **Configure o banco de dados**:
   - Acesse o phpMyAdmin no endereço [http://localhost/phpmyadmin](http://localhost/phpmyadmin).
   - Crie um banco de dados chamado `sudocomics`.
   - Importe o arquivo `sudocomics_schema.sql` fornecido no repositório.

4. **Configuração do arquivo de ambiente (.env)**:
   - Verifique se o arquivo `.env` (ou equivalente) possui as seguintes configurações:
     ```env
     DB_HOST=localhost
     DB_USER=seu_usuario
     DB_PASSWORD=sua_senha
     DB_NAME=sudocomics
     ```

5. **Adicione os quadrinhos ao banco de dados**:
   - Utilize o phpMyAdmin ou um cliente SQL para inserir os quadrinhos.

## 📦 Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. **Clone o repositório**:
  -git clone https://github.com/seu-usuario/sudocomics.git

2. **Acesse o diretório do projeto**
  -cd sudocomics

3. **Instale as dependências**
  -npm install

4. **Configure o banco de dados**
  -Siga as instruções da seção ⚙️ Configuração do Banco de Dados acima.
  
5. **Inicie o servidor local**
  -npm start

## 👥 Integrantes do Projeto
  **Viniwonk**
  
  **VinnieMoth**
  
  **Pedro**
  
  **Enrique**
  
  **Allyson Henrique**
