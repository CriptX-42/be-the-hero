const express = require("express");

const app = express();

app.get("/users/:id", (request, response) => {
  const params = request.params;
  console.log(params);
  return response.json({
    evento: "Semana omnistack 11.0",
    aluno: "Ricardo Carvalho"
  });
});
app.listen(3333);
