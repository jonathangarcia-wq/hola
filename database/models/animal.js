
'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    static associate(models) {
      Animal.belongsTo(models.Refugio, {
        as: 'refugio',
        foreignKey: 'refugioId'
      });

      Animal.belongsToMany(models.Caracteristica, {
        through: 'animal_caracteristica',
        as: 'caracteristicas',
        foreignKey: {
          name: 'animalId',
          field: 'animalid'
        },
        otherKey: {
          name: 'caracteristicaId',
          field: 'caracteristicaid'
        }
      });
    }
  }

Animal.init({
  nombre: DataTypes.STRING,
  especie: DataTypes.STRING,
  edad: DataTypes.INTEGER,
  sexo: DataTypes.STRING,
  estado: DataTypes.STRING,
  foto: DataTypes.STRING,
  refugioId: {
    type: DataTypes.INTEGER,
    field: "refugioId"
  }
}, {
  sequelize,
  modelName: "Animal",
  tableName: "animales",
  underscored: true
});
  return Animal;
};
