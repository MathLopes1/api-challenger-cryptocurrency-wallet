'use strict';
const {
  Model
} = require('sequelize');
const wallet = require('./wallet');
module.exports = (sequelize, DataTypes) => {
  class Coins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Coins.belongsTo(models.Wallet, {
        foreignKey: 'adress'
      })
      Coins.hasMany(models.Transactions, {
        foreignKey: 'coin_adress'
      })
      Coins.hasMany(models.Transactions, {
        foreignKey: 'adress_wallet'
      })
      Coins.hasMany(models.Transactions, {
        foreignKey: 'sento'
      })
      Coins.hasMany(models.Transactions, {
        foreignKey: 'receivefrom'
      })
    }
  };
  Coins.init({
    coin: DataTypes.STRING,
    fullname: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    adress_wallet: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Coins',
  });
  return Coins;
};