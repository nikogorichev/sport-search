const moment = require('moment');

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
      Event.belongsToMany(User, { through: Participant, foreignKey: 'EventId' });
      Event.belongsToMany(User, { through: Invite, foreignKey: 'event_id' });
      Event.hasMany(Participant, { foreignKey: 'EventId' });
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
      get() {
        return moment(this.getDataValue('date')).format('DD/MM/YYYY hh:mm');
      },
    },
    description: {
      type: DataTypes.TEXT,
    },
    members_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    image: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
