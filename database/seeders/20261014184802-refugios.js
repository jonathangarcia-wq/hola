
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('refugios', [
      {
        nombre: 'Refugio Patitas',
        direccion: 'Godoy Cruz, Mendoza',
        telefono: '2615551001',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nombre: 'Huellitas Felices',
        direccion: 'Ciudad de Mendoza',
        telefono: '2615551002',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('refugios', null, {});

  }
};

