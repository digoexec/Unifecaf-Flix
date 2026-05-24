# Documentação do Trabalho: API UniFECAF Flix

## 1. Descrição da Arquitetura (MVC + REST)

A API foi desenvolvida seguindo o padrão arquitetural **MVC (Model-View-Controller)**, que permite uma separação clara de responsabilidades:
- **Model:** Responsável pela interação com o banco de dados e definição da estrutura dos dados.
- **Controller:** Contém a lógica de negócio e gerencia o fluxo de informações entre o Model e as rotas.
- **View:** No contexto de uma API REST, a "View" é representada pelas respostas JSON enviadas ao cliente.

O padrão **REST (Representational State Transfer)** foi adotado para garantir que a API seja escalável, independente e fácil de integrar, utilizando métodos HTTP (GET) para acessar recursos identificados por URIs.

## 2. Justificativa das Escolhas Tecnológicas

- **Node.js:** Escolhido por sua alta performance em operações de I/O, ecossistema rico (NPM) e facilidade de desenvolvimento com JavaScript no backend.
- **MySQL:** Banco de dados relacional robusto e amplamente utilizado, ideal para garantir a integridade dos dados dos filmes através de esquemas estruturados.
- **Express.js:** Framework minimalista para Node.js que simplifica o gerenciamento de rotas e middlewares.
- **mysql2:** Driver de conexão que oferece suporte a Promises, facilitando o uso de `async/await`.

## 3. Descrição dos Endpoints

| Método | Endpoint | Parâmetros | Descrição |
| :--- | :--- | :--- | :--- |
| GET | `/v1/controle-filmes/filme` | Nenhum | Lista todos os filmes cadastrados no banco de dados. |
| GET | `/v1/controle-filmes/filme/:id` | `id` (URL) | Retorna os detalhes de um filme específico pelo seu ID único. |
| GET | `/v1/controle-filmes/filtro/filme` | `nome` (Query) | Filtra filmes que contenham o termo no nome ou na sinopse. |

## 4. Estrutura de Pastas do Projeto

```text
unifecaf-flix-api/
├── src/
│   ├── config/       # Configurações de conexão (Banco de Dados)
│   ├── controllers/  # Lógica de controle e tratamento de requisições
│   ├── models/       # Modelos de dados e interação com MySQL
│   ├── routes/       # Definição das rotas da API
│   └── index.js      # Ponto de entrada da aplicação
├── .env              # Exemplo de variáveis de ambiente
├── database.sql      # Script de criação do banco e dados iniciais
└── package.json      # Dependências e scripts do projeto
```

## 5. Questões para Exploração

### Como aplicar corretamente a arquitetura MVC na construção da API?
A aplicação correta envolve garantir que o Controller não execute queries SQL diretamente (isso cabe ao Model) e que as Rotas apenas direcionem a requisição para o Controller adequado, mantendo o código modular e testável.

### Por que o padrão REST é importante?
O REST padroniza a comunicação entre sistemas através de protocolos web padrão, permitindo que diferentes clientes (web, mobile, outros servidores) consumam os dados de forma uniforme e sem estado (stateless).

### Como validar entradas e retornar status codes adequados?
Utilizamos verificações condicionais nos Controllers para validar a presença de parâmetros obrigatórios. Retornamos `200 OK` para sucesso, `404 Not Found` para recursos inexistentes e `400 Bad Request` para erros de entrada do cliente.

### Quais boas práticas tornam a API escalável e segura?
O uso de **Variáveis de Ambiente (.env)** para proteger credenciais, a **Modularização** do código para facilitar manutenções e o uso de **Connection Pooling** no banco de dados para gerenciar múltiplas conexões de forma eficiente.
