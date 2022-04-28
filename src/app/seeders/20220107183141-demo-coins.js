module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Coins', [
      {
        coin: "BTC",
        fullname: "Bitcoin",
        amount: 0.15362,
        adress_wallet: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coin: "ETH",
        fullname: "Etherium",
        amount: 5.15362,
        adress_wallet: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coin: "BTC",
        fullname: "Bitcoin",
        amount: 2.20362,
        adress_wallet: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coin: "ETH",
        fullname: "Etherium",
        amount: 1.15362,
        adress_wallet: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Coins', null, {})
  }
}