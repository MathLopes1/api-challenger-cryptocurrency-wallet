'use strict';
const {
  Model
} = require('sequelize');
const coins = require('./coins');
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transactions.belongsTo(models.Coins, {
        foreignKey: 'id'
      })
      Transactions.belongsTo(models.Coins, {
        foreignKey: 'adress_wallet'
      })
      Transactions.belongsTo(models.Coins, {
        foreignKey: 'adress_wallet'
      })
      Transactions.belongsTo(models.Coins, {
        foreignKey: 'adress_wallet'
      })
    }
  };
  Transactions.init({
    value: DataTypes.INTEGER,
    datetime: DataTypes.DATE,
    coin_adress: DataTypes.INTEGER,
    adress_wallet: DataTypes.INTEGER,
    sendto: DataTypes.INTEGER,
    receivefrom: DataTypes.INTEGER,
    currentecotation: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Transactions',
  });
  return Transactions;
};