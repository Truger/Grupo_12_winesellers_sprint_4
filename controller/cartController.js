const products = require('../data/productsDataBase.json')

const controller = {
    index: (req, res) => {
        return res.render('cart', {'products':products});
     }
}

module.exports = controller;