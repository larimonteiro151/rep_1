const app = require("./app");
const pool = require("./database/connection");

const PORT = process.env.PORT || 3000;

pool
  .connect()
  .then(() => {
    console.log("Banco de dados conectado com sucesso!");

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco:", err.message);
  });