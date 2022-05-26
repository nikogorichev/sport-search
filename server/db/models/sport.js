const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      User, Userssport, Place, Placessport, Event,
    }) {
      Sport.belongsToMany(User, { through: Userssport, foreignKey: 'sport_id' });
      Sport.belongsToMany(Place, { through: Placessport, foreignKey: 'sport_id' });
      Sport.hasMany(Event, { foreignKey: 'sport_id' });
    }
  }
  Sport.init({
    title: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Sport',
  });
  return Sport;
};
