'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Placessport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Placessport.init({
    sport_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Sports',
        key: 'id',
      },
    },
    place_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Places',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Placessport',
  });
  return Placessport;
};
