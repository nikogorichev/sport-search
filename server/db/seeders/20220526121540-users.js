module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'admin',
        email: 'admin@mail.ru',
        password: 'admin',
        description: 'i am admin',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'chelovek',
        email: 'chel@mail.ru',
        password: '12345678',
        description: 'i am chel',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'non',
        email: 'non@mail.ru',
        password: '12345678',
        description: 'i am non',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  },
};
