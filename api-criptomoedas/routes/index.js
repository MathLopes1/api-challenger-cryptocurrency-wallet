const bodyParser = require('body-parser');
const Wallet = require('./walletsRotas')

module.exports = app => {
    app.use(
        bodyParser.json(), bodyParser.urlencoded({extended: false}),
        Wallet
    )
}