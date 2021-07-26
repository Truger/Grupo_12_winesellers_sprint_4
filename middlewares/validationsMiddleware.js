const { body } = require('express-validator');
const path = require('path');
const {Product, Category, User, Brand} = require('../database/models')
        
const validations = {
    validetUserCreate : [

    body('name').notEmpty().withMessage('Ingresa tu Nombre!'), 
    body('lastName').notEmpty().withMessage('Completa con tu Apellido!'), 
    body('email').isEmail().withMessage('debes ingresar un Email Valido').bail().custom (async (value, {req}) => {
      const user = await User.findOne({
        where: { email: req.body.email }
      });
      if(user){
          throw new Error('Email ya Existe!');
     }
  return true;
      
}),
    body('date').notEmpty().withMessage('Ingresa una Fecha!'), 
   // body('domicilio').notEmpty().withMessage('Completa con tu Direccion!'), 
    body('password').isLength({ min: 8 }).withMessage('coloca una clave mayor a 8 digitos pueden ser numero y letras!'), 
    body('passwordRepeat').custom((value, {req}) => {
        if(!req.body.passwordRepeat){
            throw new Error('repite tu clave');
        }
        let password = req.body.password;
        let password2 = req.body.passwordRepeat;

        if(password != password2){
			throw new Error('Error las claves ingresadas son Distintas');
		}
		return true;
        
	})
 ],

    validetUserLogin : [
      body('email').isEmail().withMessage('user or key not validated'),
      body('password').isLength({ min: 8 }).withMessage('user or key not validated'), 
    ],

    productValidation : [
    body("category_id").not().isIn("0").withMessage("Selecciona una Categoria"),
    body("brand_id").not().isIn("0").withMessage("Selecciona una marca"),
    body("name").notEmpty().withMessage("ingresar el Nombre del producto"),
    body("description").notEmpty().withMessage("agrega una descripcion"),
    body("stock").notEmpty().withMessage("introduce la cantidad").bail().isNumeric().withMessage("este campo deve ser un Numero"),
    body("price").notEmpty().withMessage("indicar el precio $").bail().isNumeric().withMessage("este campo deve ser un Numero"),
    body("file").custom((value, { req }) => {
      let acceptedExtensions = [".jpg", ".npg", ".gif", ".jpeg"];
      if (!req.file) {
        console.log("no tiene un file");
        if (req.body.oldImage) {
          console.log("pero tiene un fileOld");
          return true;
        } else {
          throw new Error("Tienes que subir una imagen");
        }
      }
      let fileExtension = path.extname(req.file.originalname);
  
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `las Extensiones permitidas son ${acceptedExtensions.join(", ")}`
        );
      }
      return true;
    }),
  ]
}


  module.exports = validations; 