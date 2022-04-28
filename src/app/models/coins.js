'use strict';
const {
  Model
} = require('sequelize');
const wallet = require('./wallet');
module.exports = (sequelize, DataTypes) => {
  class Coins extends Model {
    
    static associate(models) {
      Coins.belongsTo(models.Wallet, {
        foreignKey: 'adress'
      })
      Coins.hasMany(models.Transactions, {
        foreignKey: 'coin_adress'
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