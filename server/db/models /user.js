const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Sport, Userssport, Event, Participant, Invite }) {
      User.belongsToMany(Sport, { through: Userssport, foreignKey: 'user_id' });
      User.belongsToMany(Event, { through: Participant, foreignKey: 'user_id' });
      User.belongsToMany(Event, { through: Invite, foreignKey: 'user_id' });
      User.hasMany(Event, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: {
      unique: true,
      allowNull: false,
      type: DataTypes.TEXT,
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.TEXT,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
    isAdmin: {
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
