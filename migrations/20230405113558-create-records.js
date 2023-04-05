'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Records', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      adminId: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: 'Admins'
          }, key: 'id'
        }
      },
      PLHAId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'PLHAs'
          }, key: 'id'
        }
      },
      serviceId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Services'
          }, key: 'id'
        }
      },
      serviceDate: {
        type: Sequelize.DATE
      },
      note: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Records');
  }
};