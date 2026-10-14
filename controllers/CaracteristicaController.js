const caracteristicas = require("../data/caracteristicas");

const caracteristicaController = {

    index: (req, res) => {

        let resultado = caracteristicas;

        if(req.query.tipo){

            resultado = resultado.filter(caracteristica => 
                caracteristica.tipo === req.query.tipo
            );

        }

        res.json(resultado);

    },

    total: (req, res) => {

        const total = caracteristicas.length;

        res.json({ totalCaracteristicas: total });

    }

};

module.exports = caracteristicaController;