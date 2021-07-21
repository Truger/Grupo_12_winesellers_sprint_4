
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

    create:async (req, res) => {
        try {
            let brands = await Brand.findAll();
            let categories = await Category.findAll();
            return res.render('product/createProduct', {categories, brands })
        } catch (error) {
            console.log(error);
        }
    },

    save: async (req, res) => {
        console.log(req.file)
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
        let brands = await Brand.findAll();
        let categories = await Category.findAll();
        return res.render('product/createProduct',{errors: errors.mapped(), old:req.body, brands, categories});
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
        console.log(errors)
        let product = req.body;
        let id = req.params.id;
        if(errors.isEmpty()){
            console.log('no hay errorores')
          let productUpdate = await Product.update(product, {where:{id:id}})
          if(productUpdate){

             if(req.file){
                console.log('hay file new')
            let imageNew = {
                name: req.file.filename,
                product_id: id,
             }
              let imageUpdate = await Image.update(imageNew, {
                  where:{product_id:id}
              })
              if(imageUpdate){
                console.log('update image ok')
                return res.redirect('/products');
              }else{
                  console.log('error al actualizar el producto')
              }
          }else{
            return res.redirect('/products');
          }
        
         }else{
            return res.render(`product/${id}/edit`, {errors: errors.mapped(), 'product':productUpdate}); 
         }
        
        }else{
            return res.render(`product/${id}/edit`, {errors: errors.mapped(), 'product':productUpdate});
        }  
         
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