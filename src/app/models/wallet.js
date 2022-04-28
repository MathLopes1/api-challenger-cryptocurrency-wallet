const {
  Model,
} = require('sequelize');
const coins = require('./coins');

module.exports = (sequelize, DataTypes) => {
  class Wallet extends Model {
    static associate(models) {
      Wallet.hasMany(models.Coins, {
        foreignKey: 'adress_wallet',
      });
      Wallet.hasMany(models.Transactions, {
        foreignKey: 'adress_wallet',
      });
    }
  }
  Wallet.init({
    adress: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: {
        msg: 'Esse campo não pode ser vazio!',
      },
      validate: {
        funcaoValidadora(dado) {
          if (dado.length < 6) throw new Error('o nome deve ter mais de 7 caracteres');
        },
      },

    },
    cpf: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      notEmpty: {
        msg: 'Esse campo não pode ser vazio!',
      },
      validate: {
        funcaoValidadora(dado) {
          if (dado.length >= 15) throw new Error('Digite um CPF válido seguindo o o padrão: XXX.XXX.XXX-XX');
        },
        funcaoValidadoraa(dado) {
          if (dado.length <= 13) throw new Error('Digite um CPF válido seguindo o o padrão: XXX.XXX.XXX-XX');
        },
      },
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      notEmpty: {
        msg: 'Esse campo não pode ser vazio!',
      },
      validate: {
        isBefore: {
          args: '2004-01-08',
          msg: 'Usuário deve ter mais de 18 anos',
        },
      },
    },
  }, {
    sequelize,
    tableName: 'Wallet',
  });
  return Wallet;
};
