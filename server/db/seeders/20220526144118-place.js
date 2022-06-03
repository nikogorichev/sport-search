module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Places', [
      {
        title: 'Волейбольная площадка',
        address: 'Кустодиева 7',
        description: 'Зал для игровых видов спорта. Есть мужские и женские раздевалки с душевыми',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Футбольное поле',
        address: 'Гражданский проспект 100',
        description: 'Профессиональная спортивная площадка. Для любых погодных условий.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Волейбольная',
        address: 'Кирочная 19',
        description: 'Волейбольная площадка c хорошим покрытием и раздевалками. Приходите. ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Скалодром',
        address: 'Арсенальная 2',
        description: 'Большой высокий крытый скалодром. Залы для боулдеринга и трудности. Бесплатная большая парковка.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Пляжный волейбол',
        address: 'Фучика 2',
        description: 'Центр находится в белом павильоне рядом с парковкой ТЦ "Рио". пн-вс: с 10:00 до 23:00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Настольный теннис',
        address: 'Кузнецовская 13',
        description: 'Столы под настольный теннис. На площадке находится 3 штуки. Рядом метро.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Шахматы',
        address: 'Новороссийская 27',
        description: 'Собираются для игры в шахматы. Можно записаться на обучение.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Футбол',
        address: 'Ольховая 10',
        description: 'Футбольная площадка. Покрытие - трава. Cвободный вход. Ольховая 10',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Мини стадион',
        address: 'Верности 30',
        description: 'Нашел у себя во дворе мини-стадион. Можно играть в футбол/баскетбол.',
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
        title: 'Скейтерская площадка',
        address: 'Приморский проспект 3',
        description: 'Помещение отапливаемое, есть все основные фигуры: грань, радиус, мэнуал пэд, грань с заездом. Покрытие хорошее.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Спортивный корт',
        address: 'Лабутина 10',
        description: 'Подойдет для футбола. Есть бесплатная парковка, душевые, недалеко от метро.',
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
