# 🎮 Jogo da Velha - Tic-Tac-Toe

Este repositório contém uma aplicação frontend desenvolvida com **ReactJS** e empacotada em um container Docker para facilitar a execução em diferentes ambientes.

Essa aplicação consiste em um Jogo da Velha para duas pessoas que roda no browser.

## 📦 Tecnologias Utilizadas

- [ReactJS](https://reactjs.org/)
- [Vite](https://vitejs.dev/) (ou outro bundler, caso aplicável)
- [Docker](https://www.docker.com/)

## 📁 Estrutura do Projeto

<p>📦 app/</p>
   <p>├── Dockerfile</p>
   <p>├── package.json</p>
   <p>├── public/</p>
   <p>└── src/</p>

## 🐳 Como rodar com Docker

### Pré-requisitos

- Docker instalado em sua máquina.  
  👉 [Instalar o Docker](https://docs.docker.com/get-docker/)

### 1. Clonar o repositório e entrar no diretório da aplicação

git clone https://github.com/leonardomarcattidasilva/tic-tac-toe.git

cd tic-tac-toe

### 2. Executar o comando de criação da imagem e container
docker build -t tic-tac-toe .

docker run -d -h tic-tac-toe --name tic-tac-toe -p 3000:3000 tic-tac-toe

### 3. Apontar o navegador para a aplicação

http://ip_host:3000


### 📄 Licença
Este projeto está licenciado sob a MIT License.

Feito com 💙 por Leonardo Marcatti

Entre em contato!
### https://www.linkedin.com/in/leonardomarcattidasilvalms/