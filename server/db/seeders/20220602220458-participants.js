'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Participants',
      [
        {
          user_id: 1,
          EventId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          EventId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          EventId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          EventId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          EventId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          EventId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          EventId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 6,
          EventId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          EventId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          EventId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          EventId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          EventId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          EventId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          EventId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Participants', null, {});
  }
};
