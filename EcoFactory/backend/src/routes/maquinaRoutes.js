const express = require("express");

const router = express.Router();

const maquinaController = require("../controllers/maquinaController");

router.get("/", maquinaController.listar);

router.post("/", maquinaController.cadastrar);

module.exports = router;