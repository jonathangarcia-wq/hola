
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('animales', [
      {
        nombre: 'Toby',
        especie: 'Perro',
        edad: 3,
        sexo: 'Macho',
        estado: 'En adopcion',
        refugioId: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: 'Luna',
        especie: 'Gato',
        edad: 2,
        sexo: 'Hembra',
        estado: 'En adopcion',
        refugioId: 2,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('animales', null, {});
  }
};
