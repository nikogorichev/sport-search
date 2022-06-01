'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sports', [
      {
        title: 'баскетбол',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'футбол',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'хоккей',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'теннис',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'шахматы',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'армрестлинг',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'борьба',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'волейбол',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'настольный теннис',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'боулинг',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'керлинг',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'нарды',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'велосипедные прогулки',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'бейсбол',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'растяжка',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'регби',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'пробежки',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'бадминтон',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sports', null, {});
  }
};
