const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Place, User, Sport, Participant, Invite,
    }) {
      Event.belongsTo(Place, { foreignKey: 'place_id' });
      Event.belongsTo(User, { foreignKey: 'user_id' });
      Event.belongsTo(Sport, { foreignKey: 'sport_id' });
      Event.belongsToMany(User, { through: Participant, foreignKey: 'event_id' });
      Event.belongsToMany(User, { through: Invite, foreignKey: 'event_id' });
    }
  }
  Event.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    description: {
      type: DataTypes.TEXT,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    sport_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Sports',
        key: 'id',
      },
    },
    place_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Places',
        key: 'id',
      },
    },
    cost: {
      defaultValue: 0,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
