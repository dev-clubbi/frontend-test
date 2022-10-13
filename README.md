# frontend-test
Teste da Clubbi para frontend

Construa uma SPA (_single page application_) que consuma as [API's dos Estudios Ghibli](https://ghibliapi.herokuapp.com/).


### Pré-requisitos

Utilizando sua aplicação, devemos conseguir procurar por filmes, atores e locações e esses dados devem ser exibidos em uma forma de boa leitura.
Crie os filtros que achar necessário e as ordenações que achar mais úteis para cada _endpoint_.


### Tecnologias

O projeto usa [React](https://pt-br.reactjs.org/), [React Context](https://reactjs.org/docs/context.html), [React Hooks](https://reactjs.org/docs/hooks-intro.html), [Axios](https://axios-http.com/ptbr/docs/intro), [EsLint](https://eslint.org/).


### Características Técnicas

- Criação de Tabela de Filmes com as informações: Imagem, Título, Título Original, Título Original Romanizado, Descrição, Diretor, Produtor, Data de Lançamento, Duração, Pontuação no RT e URL.
- Criação de Tabela de Atores com as informações: Nome, Gênero, Idade, Cor do Olhos, Cor do Cabelo, Filmes e URL.
- Criação de Tabela de Locações com as informações: Nome, Clima, Terreno, Água de Superfície, Moradores, Filmes e URL.
- Implementação de filtros por Nome e Título.
- Implementação de rota para página de Filmes.
- Implementação de rota para página de Atores.
- Implementação de rota página de Locações.

### Como configurar

Essas instruções fornecerão uma cópia do projeto completo em execução em sua máquina local para fins de desenvolvimento e teste.
O projeto pode ser construído com npm ou yarn, então escolha uma das abordagens abaixo caso você não tenha nenhuma instalada em seu sistema.

- O Npm é distribuído com o Node.js, o que significa que, quando você baixa o Node.js, automaticamente obtém o npm instalado em seu computador. [Download Node.js](https://nodejs.org/en/download/)
- O Yarn é um gerenciador de pacotes criado pela equipe do Facebook e parece ser mais rápido que o npm em geral. [Download Yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable)

### Como instalar

- Para baixar o projeto siga as instruções abaixo:

```bash
1. git@github.com:dev-clubbi/frontend-test.git
```

- Instale as dependências e inicie o servidor:

```bash
3. npm install
4. npm start
Nota - Abre http://localhost:3000 para visualizá-lo em seu navegador.
```

Ou

```bash
3. yarn install
4. yarn start
```

NOTA - Esse projeto roda em Docker Compose

### Autora

[Kelly Cassiano](https://github.com/KeuCassie)

Muito Obrigada!
