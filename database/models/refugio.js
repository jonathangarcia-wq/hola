
'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Refugio extends Model {
    static associate(models) {
      Refugio.hasMany(models.Animal, {
        as: 'animales',
        foreignKey: 'refugioId'
      });
    }
  }

  Refugio.init({
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Refugio',
    tableName: 'refugios',
    underscored: true
  });

  return Refugio;
};
