const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photoplace extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Place }) {
      Photoplace.belongsTo(Place, { foreignKey: 'place_id' });
    }
  }
  Photoplace.init({
    url: DataTypes.TEXT,
    place_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Places',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Photoplace',
  });
  return Photoplace;
};
