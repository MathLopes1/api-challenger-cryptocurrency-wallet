const database = require('../models');
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const coins = database.coins;
const transactions = database.transactions


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
        const { coin, name, cpf, birthdate, amount } = req.query
        const where = {}

        coin ? where.coin = {} : null
        coin ? where.coin[Op.eq] = coin : null

        name ? where.name = {} : null
        name ? where.name[Op.eq] = name : null

        cpf ? where.cpf = {} : null
        cpf ? where.cpf[Op.eq] = cpf : null

        birthdate ? where.birthdate = {} : null
        birthdate ? where.birthdate[Op.eq] = birthdate : null

        amount ? where.amount = {} : null
        amount ? where.amount[Op.eq] = amount : null

        try {
            const todasAsCarteiras = await database.Wallet.findAll({
                where,
                include: [{
                    model: database.Coins,
                    attributes: ['coin', 'fullname', 'amount'],
                    as: 'Coins',
                    include: [{
                        model: database.Transactions,
                        attributes: ['value', 'datetime', 'sendto', 'receivefrom', 'currentecotation'],
                        as: 'Transactions'
                    }]
                }
                ]
            })
            return res.status(200).json(todasAsCarteiras)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegarUmaCarteira(req, res) {
        const AdressWallet = req.params.adress
        try {
            const Adress = await database.Wallet.findOne({
                where: { adress: Number(AdressWallet) },

                include: [{
                    model: database.Coins,
                    attributes: ['coin', 'fullname', 'amount'],
                    as: 'Coins',
                    include: [{
                        model: database.Transactions,
                        attributes: ['value', 'datetime', 'sendto', 'receivefrom', 'currentecotation'],
                        as: 'Transactions'
                    }]
                }
                ]
            })
            return res.status(200).json(Adress)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizarCarteira(req, res) {
        const novasInfos = req.body
        const adress = req.params.adress
        try {
            await database.Wallet.update(novasInfos, {
                where:
                {
                    adress: Number(adress)
                }
            })
            const WalletAtualizada = await database.Wallet.findOne({
                where:
                {
                    adress: Number(adress)
                }
            })
            return res.status(200).json(WalletAtualizada)
        } catch (error) {
            return res.status(404).json(error.message)
        }
    }
    static async apagarUmaCarteira(req, res) {
        const AdressWallet = req.params.adress
        try {
            const Adress = await database.Wallet.destroy({ where: { adress: Number(AdressWallet) } })
            return res.status(200).json(Adress)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = WalletController;
