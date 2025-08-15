# API de Cursos – Node.js, Fastify, Drizzle ORM

API RESTful para gerenciamento de cursos, construída com Node.js, Fastify, TypeScript, Drizzle ORM (PostgreSQL) e validação com Zod. Inclui autenticação JWT, testes automatizados E2E, factories para testes e cobertura de código.

---

## Requisitos

- Node.js 22+
- Docker e Docker Compose
- npm

---

## Tecnologias

- Fastify 5
- TypeScript
- Drizzle ORM + PostgreSQL
- Zod (validação)
- JWT (autenticação)
- Swagger/OpenAPI + Scalar (`/docs` em desenvolvimento)
- Vitest (testes e2e)
- Coverage integrado

---

## Configuração

1. Clone o repositório e acesse a pasta do projeto.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Suba o banco de dados:
   ```bash
   docker compose up -d
   ```
4. Crie o arquivo `.env` na raiz de `backend/`:
   ```
   DATABASE_URL=postgresql://postgres:postgres@localhost:5432/desafio
   NODE_ENV=development
   JWT_SECRET=sua_chave_secreta
   ```
5. Rode as migrações:
   ```bash
   npm run db:migrate
   ```
6. (Opcional) Inspecione o banco com Drizzle Studio:
   ```bash
   npm run db:studio
   ```

---

## Executando o servidor

```bash
npm run dev
```
- Porta padrão: [http://localhost:3333](http://localhost:3333)
- Documentação: [http://localhost:3333/docs](http://localhost:3333/docs)

---

## Endpoints

Base URL: `http://localhost:3333`

- **POST `/sessions`**  
  - Login de usuário  
  - Body:
    ```json
    { "email": "usuario@dominio.com", "password": "123456" }
    ```
  - Retorna: `{ "token": "<jwt>" }`

- **POST `/courses`**  
  - Cria um curso (requer JWT de manager)
  - Body:
    ```json
    { "title": "Curso de Laravel" }
    ```
  - Retorna: `{ "courseId": "<uuid>" }`

- **GET `/courses`**  
  - Lista todos os cursos (pode ordenar por título)

- **GET `/courses/:id`**  
  - Detalhes de um curso (requer JWT)

> Exemplos práticos em [`backend/requisicoes.http`](backend/requisicoes.http).

---

## Modelos principais

- **courses**: id (uuid), title (string, único), description (opcional)
- **users**: id (uuid), name, email (único), password (hash), role
- **enrollments**: id, user_id, course_id

---

## Testes e Cobertura

- Testes E2E com Vitest (`npm run test`)
- Factories para geração de dados de teste
- Banco de dados isolado para testes (`.env.test`)
- Relatório de cobertura em [`backend/coverage/index.html`](backend/coverage/index.html)

---

## Scripts

- `npm run dev` – inicia o servidor em modo desenvolvimento
- `npm run db:migrate` – aplica migrações
- `npm run db:studio` – abre Drizzle Studio
- `npm run test` – executa testes e2e
- `npm run coverage` – gera relatório de cobertura

---

## Dicas

- Se o banco não conectar, confira se o Docker está rodando e a porta 5432 está livre.
- Para autenticação, use o token JWT retornado no login no header `Authorization`.
- Para ver a cobertura, abra o arquivo [`backend/coverage/index.html`](backend/coverage/index.html) no navegador.

---

## Atualizações recentes

- Implementados testes E2E e factories.
- Separação do server da aplicação para facilitar testes.
- Banco de dados de testes isolado.
- Cobertura de código integrada.
- Validação de payloads com Zod.
- Autenticação JWT para rotas protegidas.

---

## Licença

ISC (veja [`backend/package.json`](backend/package.json))