const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Participant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Event }) {
      Participant.belongsTo(User, { foreignKey: 'user_id' });
      Participant.belongsTo(Event, { foreignKey: 'EventId' });
    }
  }
  Participant.init({
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    EventId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Events',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Participant',
  });
  return Participant;
};
