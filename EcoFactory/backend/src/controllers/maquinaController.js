const maquinaModel = require("../models/maquinaModel");

const listar = async (req, res) => {
  const maquinas = await maquinaModel.listarMaquinas();
  res.json(maquinas);
};

const cadastrar = async (req, res) => {
  const maquina = await maquinaModel.cadastrarMaquina(req.body);
  res.status(201).json(maquina);
};

module.exports = {
  listar,
  cadastrar,
};