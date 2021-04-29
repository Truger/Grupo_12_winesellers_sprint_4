const jsonDatabase = require('../model/jsonDataBase');
const model = jsonDatabase('userDataBase');
const controller = {

    register: (req, res) => {
         return res.render('user/register');
    },

    login: (req, res) => {
        console.log('login exitoso')
        return res.render('user/login');
    },

    create: (req, res) => {
        console.log(req.body);
        let userNew = {
            name : req.body.name,
            lastName : req.body.lastName,
            date : req.body.date,
            email : req.body.email,
            password : req.body.password,
            news : req.body.news,
            category:'user',
            image: 'image'
            }

           model.create(userNew);
           return res.render('user/login');
          
    }
};

module.exports = controller;
