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
     if(req.file){
        let productNew = req.body;  
           model.create(productNew);
           res.redirect('/products');
     }else{
        return res.render('product/createProduct');
     }

    },

    detail: (req, res) => {
        let product = model.find(req.params.id);
        return res.render('product/detailProduct', {'product':product});
   },

    edit: (req, res) => {
         let product = model.find(req.params.id);
         return res.render('product/editProduct', {'product':product});
    },
    update: (req, res) => {
        let productUpdate = req.body;
        productUpdate.id = req.params.id;
        if(!productUpdate.file){
            productUpdate.file = model.find(req.params.id).file;
        }
        console.log(productUpdate);
        model.update(productUpdate);
        return res.redirect('/products');
    },

    remove: (req, res) => {
        let id = req.params.id;
        model.delete(id);
        return res.reder('/products');
    }

};

module.exports = controller;