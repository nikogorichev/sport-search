const bcrypt = require('bcrypt');

const saltRounds = 10;

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'admin',
        email: 'admin@mail.ru',
        password: await bcrypt.hash('admin', saltRounds),
        description: 'i am admin',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Андрей',
        email: 'chel@mail.ru',
        password: await bcrypt.hash('Андрей', saltRounds),
        description: 'Занимаюсь футболом 10 лет.',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'noName',
        email: 'noname@mail.ru',
        password: await bcrypt.hash('noName', saltRounds),
        description: 'Занимаюсь спортом с 12 лет. Я - спорт.',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Настя',
        email: 'nastya@mail.ru',
        password: await bcrypt.hash('Настя', saltRounds),
        description: ' ',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'lexa',
        email: 'lexa@mail.ru',
        password: await bcrypt.hash('lexa', saltRounds),
        description: 'Я Леша. Занимаюсь армрестлингом и играю в шахматы. В своих кругах являюсь чемпионом. Поиграем?',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'nikita',
        email: 'nikita@mail.ru',
        password: await bcrypt.hash('nikita', saltRounds),
        description: 'Пишите мне в телеграм (@никита). Футбол, тенис.',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Дима',
        email: 'dima@mail.ru',
        password: await bcrypt.hash('dima', saltRounds),
        description: 'Привет. Люблю борьбу и акробатику. Устраиваю время от времени свои бои. Ищу приятелей для этого дела. Поборемся?',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Аня',
        email: 'anya@mail.ru',
        password: await bcrypt.hash('anya', saltRounds),
        description: 'Хочу играть в настольный тенис.',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Илья',
        email: 'ilya@mail.ru',
        password: await bcrypt.hash('ilya', saltRounds),
        description: ' ',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Roman',
        email: 'roman@mail.ru',
        password: await bcrypt.hash('roman', saltRounds),
        description: ' ',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  },
};
