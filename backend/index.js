const express = require("express");

const app = express();

app.get("/users", (request, response) => {
  return response.json({
    evento: "Semana omnistack 11.0",
    aluno: "Ricardo Carvalho"
  });
});
app.listen(3333);
