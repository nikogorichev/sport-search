module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Places', [
      {
        title: 'площадка',
        address: 'шпалерная 10',
        description: 'красивая',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'площадка 1',
        address: 'новая 233',
        description: 'большая',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'площадка 2',
        address: 'осуждаемая 228',
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
