const { Category, Product } = require("../../database/models");
const { validationResult } = require("express-validator");


const controller = {

  index:async (req, res) => {

 let categories = await Category.findAll();
 let arraycategories = [];
for(let i = 0; i < categories.length; i++){  
         let category = categories[i];
         let categoryLiteral = {category};   
         let product = await Product.findAndCountAll({where:{category_id:categories[i].id}});
         categoryLiteral.count = product.count;
        arraycategories.push(categoryLiteral);
 }
 return res.status(200).json(arraycategories);
} 
};

module.exports = controller;