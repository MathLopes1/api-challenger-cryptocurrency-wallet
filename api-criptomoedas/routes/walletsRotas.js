const WalletController = require('../controllers/walletController')
const {Router} = require('express');
const router = Router()

router.post('/api/v1/wallet', WalletController.criarCarteira)
.get('/api/v1/wallet', WalletController.listarCarteiras)















module.exports = router