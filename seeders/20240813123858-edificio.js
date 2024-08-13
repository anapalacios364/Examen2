'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let [propietarios, propietarios_metadata] = await queryInterface.sequelize.query('SELECT id FROM propietarios')
    
    await queryInterface.bulkInsert('edificios', [
    { id_propietarios: propietarios[0].id,nombre: 'edificio1', numpisos: 3, direccion: 'Guayaquil', avaluo: (Math.random()*200000).toFixed(2),createdAt: new Date(), updatedAt: new
    Date() },
    { id_propietarios: propietarios[1].id, nombre: 'edificio1', numpisos: 3, direccion: 'Guayaquil', avaluo: (Math.random()*200000).toFixed(2),createdAt: new Date(), updatedAt: new
    Date() },
    { id_propietarios: propietarios[2].id,nombre: 'edificio1', numpisos: 3, direccion: 'Guayaquil', avaluo: (Math.random()*200000).toFixed(2),createdAt: new Date(), updatedAt: new
    Date() },
    { id_propietarios: propietarios[3].id, nombre: 'edificio1', numpisos: 3, direccion: 'Guayaquil', avaluo: (Math.random()*200000).toFixed(2),createdAt: new Date(), updatedAt: new
      Date() },
    { id_propietarios: propietarios[4].id, nombre: 'edificio1', numpisos: 3, direccion: 'Guayaquil', avaluo: (Math.random()*200000).toFixed(2),createdAt: new Date(), updatedAt: new
    Date() },
      ], {});
      },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('edificios', null, {});
  }
};
