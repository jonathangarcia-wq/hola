const refugios = require("../data/refugios");

const refugioController = {

    index: (req, res) => {
        res.json(refugios);
    },

    show: (req, res) => {

        const refugio = refugios.find(
            r => r.id === Number(req.params.id)
        );

        if (!refugio) {
            return res.status(404).json({
                error: "Refugio no encontrado"
            });
        }

        res.json(refugio);
    },

    store: (req, res) => {

        if (!req.body.nombre) {
            return res.status(400).json({
                error: "El nombre es obligatorio"
            });
        }

        const nuevo = {
            id: refugios.length + 1,
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
            personaACargo: req.body.personaACargo
        };

        refugios.push(nuevo);

        res.status(201).json(nuevo);
    },

    update: (req, res) => {

        const id = req.params.id;

        const indice = refugios.findIndex(
            r => r.id === Number(id)
        );

        if (indice === -1) {
            return res.status(404).json({
                error: "Refugio no encontrado"
            });
        }

        refugios[indice] = {
            id: Number(id),
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
            personaACargo: req.body.personaACargo
        };

        res.json(refugios[indice]);
    },

    destroy: (req, res) => {

        const id = req.params.id;

        const indice = refugios.findIndex(
            r => r.id === Number(id)
        );

        if (indice === -1) {
            return res.status(404).json({
                error: "Refugio no encontrado"
            });
        }

        refugios.splice(indice, 1);

        res.status(200).json({
            mensaje: "Refugio eliminado"
        });
    }
};

module.exports = refugioController;