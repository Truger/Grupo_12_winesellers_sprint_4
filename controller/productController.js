
const {Product, Category, Image, Brand} = require('../database/models')
const {validationResult} = require('express-validator')

const controller = {

    index: (req, res) => {
        Product
        .findAll({
           include: ['brand','category','image']
        })
        .then(products => {
            console.log(products[0].image[0].name)
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

    save: async (req, res) => {
        console.log('entro a save')
        let errors = validationResult(req);
		if(errors.isEmpty()){
        let productNew = req.body;  
        console.log(req.file.filename)
        console.log(productNew)
          let newPrduct = await Product.create(productNew)
       
        if(newPrduct){
                let imageNew = {
                name: req.file.filename,
                product_id: newPrduct.id,
             }
        let newImage = await Image.create(imageNew)
        if(newImage){
            res.redirect('/products');
    }else{
        console.log('error al guardar image')
    }
          } 
         

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

    edit: async (req, res) => {
        try {
            let brands = await Brand.findAll();
            let categories = await Category.findAll();
            let product = await Product.findByPk(req.params.id, { include: ['brand', 'category','image'] });
            return res.render('product/editProduct', { product, categories, brands })
        } catch (error) {
            console.log(error);
        }
    },

    update: async (req, res) => {
        console.log(req.body)
        let errors = validationResult(req);
        let productUpdate = req.body;
        let id = req.params.id;
        if(errors.isEmpty()){
          let productUpdate = await Product.update(productUpdate)
          if(productUpdate){

             if(req.file){
            let imageNew = {
                name: req.file.filename,
                product_id: id,
             }
              let imageUpdate = await Image.update(imageNew, {
                  where:{product_id:id}
              })
              if(imageUpdate){
                return res.redirect('/products');
              }else{
                  console.log('error al actualizar el producto')
              }
          }
          return res.redirect('/products');
         }
         return res.render(`product/${id}/edit`, {errors: errors.mapped(), 'product':productUpdate}); 
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