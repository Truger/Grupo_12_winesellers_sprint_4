
const {Product, Category} = require('../database/models')
const {validationResult} = require('express-validator')

const controller = {

    index: (req, res) => {
        Product
        .findAll({
           include: ['brand','category']
        })
        .then(products => {
            return res.render('product/listProduct', {'products':products});
        })
        .catch(error => {
            console.log(error)
            return res.render('product/createProduct');
        });

    },

    create: (req, res) => {
         return res.render('product/createProduct');
    },

    save: (req, res) => {
        console.log('entro a save')
        let errors = validationResult(req);
		if(errors.isEmpty()){
        let productNew = req.body;  
           Product.create(productNew)
           .then( confirm => {
            res.redirect('/products');
           })
           .catch(error => res.send(error));
     }else{
        return res.render('product/createProduct',{errors: errors.mapped(), old:req.body});
     }

    },

    detail: (req, res) => {
        db.Product.findByPk(req.params.id,
            {
                include : ['category']
            })
            .then(product => {
              return res.render('product/detailProduct', {'product':product});
            })
            .catch(error => res.send(error));  
   },

    edit: (req, res) => {
         db.Product.findByPk(req.params.id,
            {
                include : ['category']
            })
            .then(product => {
                return res.render('product/editProduct', {'product':product});
            })
            .catch(error => res.send(error)); 
    },
    update: (req, res) => {
        let errors = validationResult(req);
        let productUpdate = req.body;
        let id = req.params.id;
        if(!productUpdate.file){
            productUpdate.file = model.find(id).file;
        }
        if(errors.isEmpty()){
          Product.update(productUpdate)
             .then( confirm => {
            return res.redirect('/products');
         })
            .catch( error => res.send(error))
        }  
        return res.render(`product/${id}/edit`, {errors: errors.mapped(), 'product':productUpdate}); 
    },

    remove: (req, res) => {
        let id = req.params.id;
        Product
        .destroy({where: {id: id}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(confirm => {
        return res.redirect('/products');
    })
    .catch(error => res.send(error))
    }

};

module.exports = controller;