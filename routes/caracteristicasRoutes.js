const express = require("express");

const router = express.Router();

const caracteristicaController = require("../controllers/CaracteristicaController");

router.get("/", caracteristicaController.index);

router.get("/total", caracteristicaController.total);

module.exports = router;