'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PLHAs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PLHAs.hasMany(models.Records)
    }

    get salaryWithUnit(){
      return this.income.toLocaleString("id-ID", {style:"currency", currency:"IDR"})
    }
  }
  PLHAs.init({
    citizenId: DataTypes.BIGINT,
    name: DataTypes.STRING,
    dateOfEntry: DataTypes.DATE,
    dateOfBirth: DataTypes.DATE,
    gender: DataTypes.STRING,
    education: DataTypes.STRING,
    marriageStatus: DataTypes.INTEGER,
    income: DataTypes.INTEGER,
    phone: DataTypes.BIGINT,
    address: DataTypes.STRING,
    reference: DataTypes.STRING,
    emergencyContact: DataTypes.BIGINT,
    detectedDate: DataTypes.DATE,
    risk: DataTypes.STRING,
    arvAccess: DataTypes.STRING,
    arvMed: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PLHAs',
  });
  return PLHAs;
};