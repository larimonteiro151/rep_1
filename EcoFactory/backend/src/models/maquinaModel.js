const pool = require("../database/connection");

const listarMaquinas = async () => {
  const resultado = await pool.query("SELECT * FROM maquinas ORDER BY id");
  return resultado.rows;
};

const cadastrarMaquina = async (maquina) => {
  const { nome, setor, tipo, status, consumo_energia, temperatura } = maquina;

  const resultado = await pool.query(
    `INSERT INTO maquinas
    (nome, setor, tipo, status, consumo_energia, temperatura)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *`,
    [nome, setor, tipo, status, consumo_energia, temperatura]
  );

  return resultado.rows[0];
};

module.exports = {
  listarMaquinas,
  cadastrarMaquina,
};