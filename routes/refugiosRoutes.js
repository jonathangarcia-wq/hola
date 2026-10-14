const express = require("express");

const router = express.Router();

const refugioController = require("../controllers/refugioController");

router.get("/", refugioController.index);

router.get("/:id", refugioController.show);

router.post("/", refugioController.store);

router.put("/:id", refugioController.update);

router.delete("/:id", refugioController.destroy);

module.exports = router;