'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Photoplaces',
      [
        {
          url: 'https://i.ibb.co/ssxt56q/22836.jpg',
          place_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://i.ibb.co/gjZZB3G/javascript.png',
          place_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://i.ibb.co/fn47Hcs/msg248689391-163497.jpg',
          place_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://i.ibb.co/gjZZB3G/javascript.png',
          place_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://i.ibb.co/ssxt56q/22836.jpg',
          place_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://i.ibb.co/fn47Hcs/msg248689391-163497.jpg',
          place_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://i.ibb.co/fn47Hcs/msg248689391-163497.jpg',
          place_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://i.ibb.co/ssxt56q/22836.jpg',
          place_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://i.ibb.co/gjZZB3G/javascript.png',
          place_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Photoplaces', null, {});
  }
};
