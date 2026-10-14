
const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = require("../middlewares/upload");
const animalController = require("../controllers/animalController");

const subirFoto = (req, res, next) => {
    upload.single("foto")(req, res, (error) => {

        if (error instanceof multer.MulterError && error.code === "LIMIT_FILE_SIZE") {
            return res.status(400).json({
                errores: {
                    foto: "La imagen no puede pesar más de 2 MB"
                }
            });
        }

        if (error) {
            return res.status(400).json({
                errores: {
                    foto: error.message
                }
            });
        }

        next();
    });
};

router.get("/", animalController.index);
router.get("/:id", animalController.show);
router.post("/", subirFoto, animalController.store);
router.put("/:id", animalController.update);
router.delete("/:id", animalController.destroy);

module.exports = router;

