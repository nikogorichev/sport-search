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
        title: 'Площадка в центре',
        address: 'Лиговский 48',
        description: 'большая',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Волейбольная',
        address: 'Кирочная 19',
        description: 'Волейбольная площадка. Приходите.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Баскетбольная площадка',
        address: 'Димитрова 36',
        description: 'Неплохая свободная площадка',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Площадка для футбола',
        address: 'Бабушкина 14',
        description: 'красивая',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Настольный теннис',
        address: 'Литовская 23',
        description: 'Столы под настольный теннис. На площадке находится 3 штуки. Рядом метро.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Шахматы',
        address: 'Пионерская 27',
        description: 'Собираются для игры в шахматы по выходным.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Футбол',
        address: 'Ольховая 10',
        description: 'Футбольная площадка, свободный вход.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Мини стадион',
        address: 'Верности 30',
        description: 'Нашел у себя во дворе мини-стадион. Можно бегать, играть в футбол/баскетбол.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Большая площадка',
        address: 'Кирочная 47',
        description: 'Большая площадка в центре. Подойдет для любых игр, а также занятий спортом.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Волейбол',
        address: 'Косая линия 16',
        description: 'Несколько раз в неделю собираемся для игры в волейбол. Присоедитняйтесь.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Новая',
        address: 'Школьная 17',
        description: ' ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Удобная площадка',
        address: 'Ворошилова 76',
        description: 'Красивая',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Скейтерская площадка',
        address: 'Софийская 19',
        description: ' ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Спортивный корт',
        address: 'Лабутина 10',
        description: ' ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'площадка',
        address: 'Уральская 37',
        description: ' Хорошая, обустроенная площадка',
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
