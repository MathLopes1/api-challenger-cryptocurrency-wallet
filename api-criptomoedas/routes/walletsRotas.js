const WalletController = require('../controllers/walletController')
const {Router} = require('express');
const router = Router()

router.post('/api/v1/wallet', WalletController.criarCarteira)
.get('/api/v1/wallet', WalletController.listarCarteiras)
.get('/api/v1/wallet/:adress', WalletController.pegarUmaCarteira)
.get('/api/v1/wallet/:adress/transaction', WalletController.historicoTransacao)
.put('/api/v1/wallet/:adress', WalletController.atualizarCarteira)
.delete('/api/v1/wallet/:adress', WalletController.apagarUmaCarteira)














module.exports = router