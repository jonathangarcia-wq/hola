
'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Caracteristica extends Model {
        static associate(models) {
            Caracteristica.belongsToMany(models.Animal, {
                through: 'animal_caracteristica',
                as: 'animales',
                foreignKey: {
                    name: 'caracteristicaId',
                    field: 'caracteristicaId'
                },
                otherKey: {
                    name: 'animalId',
                    field: 'animalId'
                }
            });
        }
    }

    Caracteristica.init({
        nombre: DataTypes.STRING,
        descripcion: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Caracteristica',
        tableName: 'caracteristicas',
        underscored: true
    });

    return Caracteristica;
};
