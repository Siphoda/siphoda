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
    citizenId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate:{
        notEmpty: {
          msg: 'Citizen Id can not be empty'
        },
        notNull: {
          msg: 'Citizen Id can not be null'
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: {
          msg: 'Name can not be empty'
        },
        notNull: {
          msg: 'Name can not be null'
        }
      }
    },
    dateOfEntry: {
      type: DataTypes.DATE,
      allowNull: false,
      validate:{
        notEmpty: {
          msg: 'Date of entry can not be empty'
        },
        notNull: {
          msg: 'Date of entry can not be null'
        }
      }
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
      validate:{
        notEmpty: {
          msg: 'Date of birth can not be empty'
        },
        notNull: {
          msg: 'Date of birth can not be null'
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: {
          msg: 'Gender can not be empty'
        },
        notNull: {
          msg: 'Gender can not be null'
        }
      }
    },
    education: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: {
          msg: 'Education can not be empty'
        },
        notNull: {
          msg: 'Education can not be null'
        }
      }
    },
    marriageStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: {
          msg: 'Marriage status can not be empty'
        },
        notNull: {
          msg: 'Marriage status can not be null'
        }
      }
    },
    income: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: {
          msg: 'Income can not be empty'
        },
        notNull: {
          msg: 'Income can not be null'
        }
      }
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate:{
        notEmpty: {
          msg: 'Phone can not be empty'
        },
        notNull: {
          msg: 'Phone can not be null'
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: {
          msg: 'Address can not be empty'
        },
        notNull: {
          msg: 'Address can not be null'
        }
      }
    },
    reference: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: {
          msg: 'REference can not be empty'
        },
        notNull: {
          msg: 'REference can not be null'
        }
      }
    },
    emergencyContact: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate:{
        notEmpty: {
          msg: 'Emergency contact can not be empty'
        },
        notNull: {
          msg: 'Emergency contact can not be null'
        }
      }
    },
    detectedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate:{
        notEmpty: {
          msg: 'Detected Date can not be empty'
        },
        notNull: {
          msg: 'Detected Date can not be null'
        }
      }
    },
    risk: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: {
          msg: 'Risk can not be empty'
        },
        notNull: {
          msg: 'Risk can not be null'
        }
      }
    },
    arvAccess: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: {
          msg: 'Arv access can not be empty'
        },
        notNull: {
          msg: 'Arv access can not be null'
        }
      }
    },
    arvMed: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: {
          msg: 'Arv med can not be empty'
        },
        notNull: {
          msg: 'Arv med can not be null'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'PLHAs',
  });
  return PLHAs;
};