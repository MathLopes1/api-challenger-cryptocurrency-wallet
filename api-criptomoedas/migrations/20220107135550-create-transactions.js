'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.FLOAT
      },
      datetime: {
        type: Sequelize.DATE
      },
      coin_adress: {
        type: Sequelize.INTEGER,
        references: {
          model: 'coins',
          key: 'id'
        }
      },
      adress_wallet: {
        type: Sequelize.INTEGER,
        references: {
          model: 'coins',
          key: 'adress_wallet'
        }
      },
      sendto: {
        type: Sequelize.INTEGER,
        references: {
          model: 'coins',
          key: 'adress_wallet'
        }
      },
      receivefrom: {
        type: Sequelize.INTEGER,
        references: {
          model: 'coins',
          key: 'adress_wallet'
        }
      },
      currentecotation: {
        type: Sequelize.FLOAT
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');
  }
};