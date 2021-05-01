const jsonDatabase = require('../model/jsonDataBase');
const model = jsonDatabase('productsDataBase');

const controller = {

    index: (req, res) => {
            let products = model.all();
            return res.render('product/listProduct', {'products': products});
    },

    create: (req, res) => {
         return res.render('product/createProduct');
    },
    save: (req, res) => {
     console.log(req.body);
     let productNew = {
         name : req.body.name,
         description : req.body.description,
         price : req.body.price,
         stock : req.body.stock,
         image : req.body.file,
         category : req.body.category,
         }

        model.create(productNew);
        res.redirect('/products');
    },

    edit: (req, res) => {
         return res.render('product/editProduct');
    },

};

module.exports = controller;