'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Records extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Records.init({
    adminId: DataTypes.INTEGER,
    plhaId: DataTypes.INTEGER,
    serviceId: DataTypes.INTEGER,
    serviceDate: DataTypes.DATE,
    note: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Records',
  });
  return Records;
};