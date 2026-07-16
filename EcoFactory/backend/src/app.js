const express = require("express");
const cors = require("cors");

const maquinaRoutes = require("./routes/maquinaRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/maquinas", maquinaRoutes);

app.get("/", (req, res) => {
  res.json({ mensagem: "API EcoFactory funcionando!" });
});

module.exports = app;