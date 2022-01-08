module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Wallet', [
      {
        adress: 1,
        name: "Elaine Magalhães da Silva",
        cpf: "784.456.123.20",
        birthdate: 20/04/1978,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        adress: 2,
        name: "Marcos Magalhães da Silva",
        cpf: "789.656.123.20",
        birthdate: 20/04/1980,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        adress: 3,
        name: "Roseanne Magalhães Pinheiros",
        cpf: "989.456.123.20",
        birthdate: 20/04/1985,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        adress: 4,
        name: "Mauricio Oliveira da Silva",
        cpf: "149.456.123.63",
        birthdate: 20/04/1990,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Wallet', null, {})
  }
}