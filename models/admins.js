'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Admins.belongsTo(models.Users)
      Admins.hasMany(models.Records)
    }
  }
  Admins.init({
    employeeReg: DataTypes.INTEGER,
    name: DataTypes.STRING,
    phoneNum: DataTypes.BIGINT,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Admins',
  });
  return Admins;
};