
const { Animal, Refugio, Caracteristica } = require("../database/models");

const animalController = {

    index: async (req, res) => {
        try {
         
            const animales = await Animal.findAll({
                include: [
                    { model: Refugio, as: "refugio" },
                    {
                        model: Caracteristica,
                        as: "caracteristicas",
                        attributes: ["id", "nombre"],
                        through: { attributes: [] }
                    }
                ]
            });

            res.json(animales);

        } catch (error) {
            console.error("ERROR AL CONSULTAR ANIMALES:", error);

            res.status(500).json({
                error: error.message
            });
        }
    },


    show: async (req, res) => {
        try {
            const animal = await Animal.findByPk(req.params.id, {
                include: [
                    { model: Refugio, as: "refugio" },
                    {
                        model: Caracteristica,
                        as: "caracteristicas",
                        attributes: ["id", "nombre"],
                        through: { attributes: [] }
                    }
                ]
            });

            if (!animal) {
                return res.status(404).json({
                    error: "Animal no encontrado"
                });
            }

            res.json(animal);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "Error al obtener el animal"
            });
        }
    },

    store: async (req, res) => {
        try {
            const { nombre, especie, edad, sexo, estado, refugioId } = req.body;

            const errores = {};

            if (!nombre || nombre.trim().length < 2) {
                errores.nombre = "El nombre debe tener al menos 2 caracteres";
            }

            if (!especie || especie.trim().length < 2) {
                errores.especie = "La especie es obligatoria";
            }

            if (edad === undefined || edad === "" || isNaN(edad) || Number(edad) < 0) {
                errores.edad = "La edad debe ser un número mayor o igual a cero";
            }

            if (!sexo) {
                errores.sexo = "El sexo es obligatorio";
            }

            if (!estado) {
                errores.estado = "El estado es obligatorio";
            }

            if (!refugioId || isNaN(refugioId)) {
                errores.refugioId = "Debés indicar un refugio válido";
            }

            if (Object.keys(errores).length > 0) {
                return res.status(400).json({ errores });
            }

            const refugio = await Refugio.findByPk(refugioId);

            if (!refugio) {
                return res.status(400).json({
                    errores: {
                        refugioId: "El refugio elegido no existe"
                    }
                });
            }

            const nuevo = await Animal.create({
                nombre: nombre.trim(),
                especie: especie.trim(),
                edad: Number(edad),
                sexo,
                estado,
                refugioId: Number(refugioId),
                foto: req.file ? req.file.filename : null
            });

            res.status(201).json(nuevo);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "Error al crear el animal"
            });
        }
    },

    update: async (req, res) => {
        try {
            const animal = await Animal.findByPk(req.params.id);

            if (!animal) {
                return res.status(404).json({
                    error: "Animal no encontrado"
                });
            }

            const { nombre, especie, edad, sexo, estado, refugioId } = req.body;

            const errores = {};

            if (!nombre || nombre.trim().length < 2) {
                errores.nombre = "El nombre debe tener al menos 2 caracteres";
            }

            if (!especie || especie.trim().length < 2) {
                errores.especie = "La especie es obligatoria";
            }

            if (edad === undefined || edad === "" || isNaN(edad) || Number(edad) < 0) {
                errores.edad = "La edad debe ser un número mayor o igual a cero";
            }

            if (!sexo) {
                errores.sexo = "El sexo es obligatorio";
            }

            if (!estado) {
                errores.estado = "El estado es obligatorio";
            }

            if (!refugioId || isNaN(refugioId)) {
                errores.refugioId = "Debés indicar un refugio válido";
            }

            if (Object.keys(errores).length > 0) {
                return res.status(400).json({ errores });
            }

            const refugio = await Refugio.findByPk(refugioId);

            if (!refugio) {
                return res.status(400).json({
                    errores: {
                        refugioId: "El refugio elegido no existe"
                    }
                });
            }

            await animal.update({
                nombre: nombre.trim(),
                especie: especie.trim(),
                edad: Number(edad),
                sexo,
                estado,
                refugioId: Number(refugioId)
            });

            res.json(animal);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "Error al modificar el animal"
            });
        }
    },

    destroy: async (req, res) => {
        try {
            const animal = await Animal.findByPk(req.params.id);

            if (!animal) {
                return res.status(404).json({
                    error: "Animal no encontrado"
                });
            }

            await animal.destroy();

            res.status(200).json({
                mensaje: "Animal eliminado"
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "Error al eliminar el animal"
            });
        }
    }

};

module.exports = animalController;
console.log("CONTROLADOR NUEVO CON SEQUELIZE");