const express = require("express");

const app = express();

app.use(express.json());

/* *
 * Tipos de parametros
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginações)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Ciroi da requisição, utilizado para criar ou alterar outros recursos
 */

app.post("/users", (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json({
    evento: "Semana omnistack 11.0",
    aluno: "Ricardo Carvalho"
  });
});
app.listen(3333);
