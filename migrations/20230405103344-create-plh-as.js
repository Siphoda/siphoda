'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PLHAs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      citizenId: {
        type: Sequelize.BIGINT
      },
      name: {
        type: Sequelize.STRING
      },
      dateOfEntry: {
        type: Sequelize.DATE
      },
      dateOfBirth: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.STRING
      },
      education: {
        type: Sequelize.STRING
      },
      marriageStatus: {
        type: Sequelize.INTEGER
      },
      income: {
        type: Sequelize.INTEGER
      },
      phone: {
        type: Sequelize.BIGINT
      },
      address: {
        type: Sequelize.STRING
      },
      reference: {
        type: Sequelize.STRING
      },
      emergencyContact: {
        type: Sequelize.BIGINT
      },
      detectedDate: {
        type: Sequelize.DATE
      },
      risk: {
        type: Sequelize.STRING
      },
      arvAccess: {
        type: Sequelize.STRING
      },
      arvMed: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('PLHAs');
  }
};