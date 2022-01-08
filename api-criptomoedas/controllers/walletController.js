const database = require('../models')

class WalletController {

    static async criarCarteira(req, res) {
        const novaCarteira = req.body


       
        try {
            const novaCarteiraCriada = await database.Wallet.create(novaCarteira)
            return res.status(201).json(novaCarteiraCriada)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async listarCarteiras(req, res) {
        try {
            const todasAsCarteiras = await database.Wallet.findAll()
            return res.status(200).json(todasAsCarteiras)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
      static async pegarUmaCarteira(req, res) {
        const IdPessoa = req.params.adress
        try {
            const umaPessoa = await database.pessoas.findOne({ where: { id: Number(IdPessoa) } })
            return res.status(200).json(umaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = WalletController;
