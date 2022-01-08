'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Coins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      coin: {
        type: Sequelize.ENUM('BTC','ETH','BNB','BRL','USD')
      },
      fullname: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.FLOAT
      },
      adress_wallet: {
        type: Sequelize.INTEGER,
        references: {
          model: 'wallet',
          key: 'adress'
        }
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
    await queryInterface.dropTable('Coins');
  }
};