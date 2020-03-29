const express = require("express");

const app = express();

app.get("/users", (request, response) => {
  const params = request.query;
  console.log(params);
  return response.json({
    evento: "Semana omnistack 11.0",
    aluno: "Ricardo Carvalho"
  });
});
app.listen(3333);
