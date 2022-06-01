module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Places', [
      {
        title: 'площадка',
        address: 'Невский 105',
        description: 'красивая',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'площадка 1',
        address: 'Лиговский 48',
        description: 'большая',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'площадка 2',
        address: 'Кирочная 19',
        description: 'волейбольная',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Places', null, {});
  },
};
