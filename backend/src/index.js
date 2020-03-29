const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());

/* *
 * Tipos de parametros
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginações)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Ciroi da requisição, utilizado para criar ou alterar outros recursos
 */

app.use(routes);

app.listen(3333);
