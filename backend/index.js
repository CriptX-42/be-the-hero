const express = require("express");

const app = express();

/* *
 * Tipos de parametros
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginações)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Ciroi da requisição, utilizado para criar ou alterar outros recursos
 */

app.get("/users/:id", (request, response) => {
  const params = request.params;
  console.log(params);
  return response.json({
    evento: "Semana omnistack 11.0",
    aluno: "Ricardo Carvalho"
  });
});
app.listen(3333);
