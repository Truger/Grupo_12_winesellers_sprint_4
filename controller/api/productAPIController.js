const {Product, Category, Image, Brand} = require('../../database/models')
const {validationResult} = require('express-validator')

const controller = {

    index: (req, res) => {
        Product
        .findAll({
           include: ['brand','category','image']
        })
        .then(products => {
            let productArray =[];
            products.forEach(element => {
                let product = {
                    name: element.name,
                    category: element.category.name,
                    brand: element.brand.name,
                    description: element.description,
                    url:'http://'+req.headers.host +'/Img/product/'+ element.image[0].name
                }
                console.log(product)
                productArray.push(product);
            });
            return res.status(200).json(productArray);
        })
        .catch(error => {
            console.log(error)
            return res.status(401).json(error);
        });

    },

    lastProduct: async (req, res) => {
        try {
            let products = await Product.findAll({include: ['brand','category','image']})
            let product = products[products.length -1]
            let image = product.image[0].name;
            let productLiteral = {product}; 
            productLiteral.url ='http://'+ req.headers.host +'/Img/product/'+ image;
            console.log(product)
            return res.status(200).json(productLiteral);
        } catch (error) {
            return res.status(401).json(error);
        }

   },

    create:async (req, res) => {
        try {
            let brands = await Brand.findAll();
            let categories = await Category.findAll();
            return res.status(200).json(brands,categories);
        } catch (error) {
            return res.status(400).json('products no found');
        }
    },

    save: async (req, res) => {
        let errors = validationResult(req);
		if(errors.isEmpty()){
        let productNew = req.body;  
        let newPrduct = await Product.create(productNew)
       
        if(newPrduct){
                let imageNew = {
                name: req.file.filename,
                product_id: newPrduct.id,
             }
        let newImage = await Image.create(imageNew)
        if(newImage){
            return res.status(200).json(confirm);
    }else{
        return res.status(401).json(error);
       }
    } 
         
     }else{
        let brands = await Brand.findAll();
        let categories = await Category.findAll();
        let old = req.body;
        return res.status(401).json(errors,old, brands, categories);
     }

    },

    detail:async (req, res) => {
        try {
            let product = await Product.findByPk(req.params.id, { include: ['brand', 'category','image'] });
            let image = product.image[0].name;
            let productLiteral = {product}; 
            productLiteral.url = req.headers.host +'/Img/product/'+ image;
            console.log(product)
            return res.status(200).json(productLiteral);
        } catch (error) {
            return res.status(401).json(error);
        }

   },

    edit: async (req, res) => {
        try {
            let brands = await Brand.findAll();
            let categories = await Category.findAll();
            let product = await Product.findByPk(req.params.id, { include: ['brand', 'category','image'] });
            return res.status(200).json({product, brands, categories});
        } catch (error) {
            return res.status(400).json(error);
        }
    },

    update: async (req, res) => {
        let errors = validationResult(req);
        let product = JSON.parse(req.body);
        let id = req.params.id;
        console.log(product)
        if(errors.isEmpty()){
          let productUpdate = await Product.update(product, {where:{id:id}})
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
                return res.status(200).json(productUpdate);
              }else{
                return res.status(401).json(error);
              }
          }else{
            return res.status(401).json(errors);
          }
        
         }else{
            return res.status(401).json(errors);
         }
        
        }else{
            return res.status(401).json(errors);
        }  
         
    },

    remove: async (req, res) => {
        try{
        let id = req.params.id;
        await Product
        .destroy({where: {id: id}, force: true}) // force: true es para asegurar que se ejecute la acción
        return res.status(200).json('product remove succesfully')
        }catch(error){
        return res.status(400).json('error en backend');
        }
    }

};

module.exports = controller;