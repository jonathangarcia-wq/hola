
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('caracteristicas', [
      { nombre: 'Juguetón', descripcion: 'Disfruta jugar y compartir actividades', created_at: new Date(), updated_at: new Date() },
      { nombre: 'Sociable', descripcion: 'Se lleva bien con otros animales', created_at: new Date(), updated_at: new Date() },
      { nombre: 'Tranquilo', descripcion: 'Tiene un comportamiento calmado', created_at: new Date(), updated_at: new Date() }
    ]);

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('caracteristicas', null, {});

  }
};
