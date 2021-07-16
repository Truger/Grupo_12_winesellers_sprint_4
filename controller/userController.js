const {User} = require('../database/models')
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
      try {
      console.log(req.body);
     let errors = validationResult(req);
     console.log(errors)
      if (errors.isEmpty) {
        console.log('entre acrear user desde controller')
         let userNew = {
          first_name: req.body.name,
          last_name: req.body.lastName,
          username: req.body.lastName,
          date: req.body.date,
          email: req.body.email,
          password: req.body.password
      }
        User.create(userNew)
              .then(user => {
                 return res.status(200).json(user);
             })
             .catch((error => {
                 return res.status(401).json(error);
             }))
            
         }
        }catch(error){
          console.log(error);
      } 
   },
  
  detail: (req, res) => {
    let user = model.findOne(req.params.id);
		return res.render('user/detailUser', {user: user});
  }

};

module.exports = controller;
