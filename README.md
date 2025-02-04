# ToDo List - Frontend

Este é o frontend do projeto **ToDo List** desenvolvido utilizando **Angular**. O projeto consome a API do backend desenvolvido com Django e Django REST Framework (DRF).

## Tecnologias Utilizadas

- **Angular 19**: Framework para a construção de Single Page Application (SPA).
- **HTML5**: Estruturação das páginas.
- **CSS3**: Estilização da aplicação.
- **TypeScript**: Linguagem principal para o desenvolvimento.
- **Angular Material**: Biblioteca para componentes de UI.

## Pré-requisitos

Antes de rodar o projeto, você precisará ter as seguintes ferramentas instaladas:

- **Node.js**: Para o gerenciamento de pacotes e execução do servidor.
  - [Baixe e instale o Node.js aqui](https://nodejs.org/)

- **Angular CLI**: Ferramenta para facilitar o gerenciamento de projetos Angular.
  - Para instalar globalmente, execute o comando:
    ```bash
    npm install -g @angular/cli
    ```

## Instalação

1. Clone o repositório do projeto:
    ```bash
    git clone https://github.com/Rafael-Guerreiro/TODOlist_Frontend
    ```

2. Navegue até a pasta do projeto:
    ```bash
    cd todolist-frontend
    ```

3. Instale as dependências do projeto:
    ```bash
    npm install
    ```

## Como Executar

1. Para rodar a aplicação, execute:
    ```bash
    ng serve
    ```

2. Abra o navegador e acesse o seguinte endereço:
    ```
    http://localhost:4200
    ```

## Funcionalidades/Execução

- Exibir tarefas (todos): Todas as tarefas cadastradas serão exibidas na página.
- Adicionar novas tarefas: Digite o nome da tarefa no campo "Adicionar tarefa" e clique em Adicionar.
- Editar tarefas existentes: Clique no nome da tarefa para editá-la diretamente.
- Marcar tarefas como completas: Clique no botão "Concluída" para marcar a tarefa como finalizada.
- Deletar tarefas: Clique no botão "Remover" para excluir a tarefa da lista.
