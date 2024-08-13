'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    for (let i = 0; i <5; i++) {
    
    await
    queryInterface.bulkInsert('propietarios', [{
    
      nombre: 'Nombre'+i,
      apellidos: 'Apellido'+i +' Apellido'+i,
      estado: 'pagado',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  }  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('propietarios', null, {});
  }
};
