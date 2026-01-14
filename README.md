![Status](https://img.shields.io/badge/status-ativo-brightgreen) ![Linguagem](https://img.shields.io/badge/linguagem-JavaScript-yellow)

# Webhook Status Node.js

Este projeto é uma API desenvolvida em Node.js utilizando o framework Express para receber e armazenar notificações de status via webhooks num banco de dados PostgreSQL.

## 🚀 Funcionalidades

- **Endpoint de Webhook**: Recebe notificações via POST em /api/webhook.

- **Persistência**: Armazena dados como client_id, status_id, status e o payload completo em JSONB no banco de dados.

- **Docker Ready**: Configuração pronta para subir um ambiente de banco de dados PostgreSQL rapidamente.

## 🛠️ Tecnologias Utilizadas

- **Node.js** (v24.11.1 recomendado)

- **Express**

- **PostgreSQL** (pg)

- **Dotenv** para variáveis de ambiente

- **Docker & Docker Compose**

## 📋 Pré-requisitos

- Node.js instalado.

- Docker e Docker Compose (opcional, para o banco de dados).

## 🔧 Configuração

1. **Variáveis de Ambiente:** Crie um arquivo `.env` na raiz do projeto (pode usar o `.env.example` como base) e configura os dados de acesso ao banco:

```
DB_USER=usuario
DB_PASS=senha
DB_HOST=localhost
DB_NAME=db_webhook
DB_PORT=5432
```

2. **Banco de Dados:** Se utiizar o Docker, pode subir o banco de dados com:

```
docker compose up -d
```
O script `init_db.sql` cria a tabela necessária automaticamente se configurado no volume do Docker.

3. **Instalação:** Instala as dependências do projeto:

```
npm install
```

4. **Executar:** Em modo prd ou dev (watch):

```
npm start
npm run dev
```

O servidor estará disponível em `http://localhost:3000`.

## 📡 Exemplo de Utilização

Pode testar o envio de uma notificação enviando um POST para `http://localhost:3000/api/webhook` com o seguinte JSON:

```
{
  "clientID": "12345",
  "statusID": "ABC-999",
  "status": "success",
  "info_adicional": "qualquer info"
}
```

## 📜 Estrutura do Projeto

- `server.js`: Ponto de entrada da aplicação.

- `src/app.js`: Configuração do Express.

- `src/routes/`: Definição das rotas da API.

- `src/controllers/`: Lógica de negócio e processamento das requisições.

- `src/config/`: Configurações de banco de dados e ambiente.

- `init_db.sql`: Script SQL para criação da tabela.
