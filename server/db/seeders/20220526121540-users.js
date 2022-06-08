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
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7yIVVe3lwuwkHP3CyTEoe8ZKPOedGsgN6TrbOUn0_EZ93bYJZTpE5RF32AIv5Pdb2KG8&usqp=CAU',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'noName',
        email: 'noname@mail.ru',
        password: await bcrypt.hash('noName', saltRounds),
        description: 'Занимаюсь спортом с 12 лет. Я - спорт.',
        isAdmin: false,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ZgmGenWtU6cGGP6o_4D9Bd1BHgIoUK-rVwOf2wJUMoiSwpYaTh76sPRuYNtJp5rN6Go&usqp=CAU',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Настя',
        email: 'nastya@mail.ru',
        password: await bcrypt.hash('Настя', saltRounds),
        description: ' ',
        isAdmin: true,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspRGS0Kr-KZSgtYQm0o-uakrCbSARzKEKrA&usqp=CAU',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'kenya',
        email: 'kenya@mail.ru',
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
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BekuGzXLxaGK6idnRr9H4hHSKnr6eM5QUA&usqp=CAU',
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
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI9La8fPPDpUcXBex1TrkwDypBGqSBQWmaWV8jnbqqLbUhJ7wQFZfAPGUsCb_p75pQHP8&usqp=CAU',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Аня',
        email: 'anya@mail.ru',
        password: await bcrypt.hash('anya', saltRounds),
        description: 'Хочу играть в настольный тенис.',
        isAdmin: true,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwH1XXij1fidenUGCV1iu86lgDlkh8fdFRJPIiqgwYuqqrF1prQPgSAQgA5v2Kg_EpxhQ&usqp=CAU',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Илья',
        email: 'ilya@mail.ru',
        password: await bcrypt.hash('ilya', saltRounds),
        description: 'Играю в баскет',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Roman',
        email: 'roman@mail.ru',
        password: await bcrypt.hash('roman', saltRounds),
        description: '2 разряд по шахматам',
        isAdmin: true,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVCnfzKmCHi58_wvYl5By5eXJdS2VHdY4AvA&usqp=CAU',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  },
};
