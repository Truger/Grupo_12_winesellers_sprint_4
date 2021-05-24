const { body } = require('express-validator');
const path = require('path');
let jsonDatabaseP = require('../model/jsonDatabase');
let model = jsonDatabaseP('userDataBase')
        
const validations = {

    validetUserLogin : [
    body('email').isEmail().withMessage('debes ingresar un Email Valido'), 
    body('password').notEmpty().withMessage('coloca tu clave') 
    ],
}

  module.exports = validations; 