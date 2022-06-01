'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Events', [
      {
        title: 'мероприятие',
        date: new Date(),
        description: 'красивая',
        members_count: 10,
        user_id: 2,
        sport_id: 1,
        place_id: 2,
        cost: 0,
        phone: '89113845969',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'новый сбор',
        date: new Date(),
        description: 'красивая',
        members_count: 20,
        user_id: 2,
        sport_id: 1,
        place_id: 2,
        cost: 0,
        phone: 'Пишите в телеграм @yasport',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'игра',
        date: new Date(),
        description: 'красивая',
        members_count: 30,
        user_id: 2,
        sport_id: 1,
        place_id: 2,
        cost: 0,
        phone: '89999948596',
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
    await queryInterface.bulkDelete('Events', null, {});
  },
};
