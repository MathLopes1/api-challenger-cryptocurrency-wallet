module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Transactions', [
    {
      value: 5.563,
      datetime: new Date(),
      coin_adress: 1,
      adress_wallet: 1,
      sendto: 2,
      receivefrom: 1,
      currentecotation: 40.000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      value: 6.563,
      datetime: new Date(),
      coin_adress: 1,
      adress_wallet: 1,
      sendto: 2,
      receivefrom: 1,
      currentecotation: 50.000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      value: 5.563,
      datetime: new Date(),
      coin_adress: 1,
      adress_wallet: 2,
      sendto: 1,
      receivefrom: 2,
      currentecotation: 4.000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Transactions', null, {}),
};
