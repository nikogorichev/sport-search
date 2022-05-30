const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Sport, Placessport, Event, Photoplace }) {
      Place.belongsToMany(Sport, { through: Placessport, foreignKey: 'place_id' });
      Place.hasMany(Event, { foreignKey: 'place_id' });
      Place.hasMany(Photoplace, { foreignKey: 'place_id' });
    }
  }
  Place.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    address: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Place',
  });
  return Place;
};
