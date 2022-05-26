'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sports', [
      {
        title: 'basketball',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'football',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sports', null, {});
  }
};
