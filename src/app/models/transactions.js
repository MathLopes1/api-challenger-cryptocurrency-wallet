const {
  Model,
} = require('sequelize');
const coins = require('./coins');

module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    static associate(models) {
      Transactions.belongsTo(models.Coins, {
        foreignKey: 'id',
      });
      Transactions.belongsTo(models.Wallet, {
        foreignKey: 'adress',
      });
    }
  }
  Transactions.init({
    value: DataTypes.INTEGER,
    datetime: DataTypes.DATE,
    coin_adress: DataTypes.INTEGER,
    adress_wallet: DataTypes.INTEGER,
    sendto: DataTypes.INTEGER,
    receivefrom: DataTypes.INTEGER,
    currentecotation: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Transactions',
  });
  return Transactions;
};
