const moment = require('moment');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE,
        get() {
          return moment(this.getDataValue('date')).format('DD/MM/YYYY h:mm');
        },
      },
      description: {
        type: Sequelize.TEXT,
      },
      members_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      sport_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Sports',
          key: 'id',
        },
      },
      place_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Places',
          key: 'id',
        },
      },
      cost: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Events');
  },
};
