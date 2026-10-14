
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    const [animales] = await queryInterface.sequelize.query(
      "SELECT id, nombre FROM animales;"
    );

    const [caracteristicas] = await queryInterface.sequelize.query(
      "SELECT id, nombre FROM caracteristicas;"
    );

    const toby = animales.find(a => a.nombre === 'Toby');
    const luna = animales.find(a => a.nombre === 'Luna');

    const jugueton = caracteristicas.find(c => c.nombre === 'Juguetón');
    const sociable = caracteristicas.find(c => c.nombre === 'Sociable');
    const tranquilo = caracteristicas.find(c => c.nombre === 'Tranquilo');

    await queryInterface.bulkInsert('animal_caracteristica', [
      {
        animalId: toby.id,
        caracteristicaId: jugueton.id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        animalId: toby.id,
        caracteristicaId: sociable.id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        animalId: luna.id,
        caracteristicaId: sociable.id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        animalId: luna.id,
        caracteristicaId: tranquilo.id,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('animal_caracteristica', null, {});

  }
};
