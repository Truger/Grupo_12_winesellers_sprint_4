const jsonDatabase = require("../model/jsonDataBase");
const model = jsonDatabase("userDataBase");
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const controller = {
  register: (req, res) => {
    return res.render("user/register");
  },

  login: (req, res) => {
    return res.render("user/login");
  },

  loguear: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
     const userLoguear = model.findOne({where: {email: req.body.email}});
      if (userLoguear) {
        let password = req.body.password;
        if (bcrypt.compareSync(password, userLoguear.password)) {
          delete userLoguear.password;
          req.session.userLogueado = userLoguear;
          console.log(req.session.userLogueado)
          if (req.body.remember != undefined) {
            res.cookie("userEmail", userLoguear.email, {
              maxAge: 100 * 60 * 10,
            });
          }
          return res.redirect("/products");
        } else {
          let error = {
            msg: "Usuario o password Incorrecto!!",
          };
          return res.render("user/login", { error: error });
        }
      } else {
        let error = {
          msg: "Usuario o password Incorrecto!!",
        };

        return res.render("user/login", { error: error });
      }
    }
    return res.render("user/login", { errors: errors.mapped() });
  },

  logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return	res.redirect('/');
    },

  create: (req, res) => {
    console.log(req.body);
    let errors = validationResult(req);
    if (errors.isEmpty()) {
       let userNew = {
        name: req.body.name,
        lastName: req.body.lastName,
        date: req.body.date,
        email: req.body.email,
        password: req.body.password,
        news: req.body.news,
        rol: "user",
        image: req.body.file,
    };

    model.create(userNew);
     return res.render("user/login");
   }else{
     return res.render("user/register", { errors: errors.mapped() });
   }
  },

  detail: (req, res) => {
    let user = model.findOne(req.params.id);
		return res.render('user/detailUser', {user: user});
  }

};

module.exports = controller;
