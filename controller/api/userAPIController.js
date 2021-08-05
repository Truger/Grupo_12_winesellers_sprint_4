const { User } = require("../../database/models");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const controller = {

  loguear: async (req, res) => {
    let error = {
      msg: "user or key not validated",
      params: "error"
    };
      let errors = validationResult(req);   
      if (errors.isEmpty()) {
        const userLoguear = await User.findOne({
          where: { email: req.body.email },
        });
        if (userLoguear) {
          let password = req.body.password;
          if (bcrypt.compareSync(password, userLoguear.password)) { // con el password
            delete userLoguear.password;
            req.session.userLogueado = userLoguear;
            console.log(req.session.userLogueado);
            if (req.body.remember != undefined) {
              res.cookie("userEmail", userLoguear.email, {
                maxAge: 100 * 60 * 10,
              });
            }
            return res.status(200).json(userLoguear); 
          } else {
            return res.status(400).json('error de validacion');
          }
        } else {
          return res.status(400).json('error de validacion');
        }
      } else {
        return res.status(400).json('error de validacion');
      }
  },

  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },

  create: async (req, res) => {
    console.log(req.body);
    let errors = validationResult(req);
    console.log(errors);
    if (errors.isEmpty()) {
      let userNew = {
        first_name: req.body.name,
        last_name: req.body.lastName,
        username: req.body.lastName,
        date: req.body.date,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
      };
      User.create(userNew)
        .then(function (user) {
          return res.status(200).json(userNew); 
        })
        .catch(function (error) {
          return res.status(400).json(error);
        });
  }else {
    let old = req.body;
      return res.status(401).json(errors, old);
    }
  },

  detail: (req, res) => {
    let user = model.findOne(req.params.id);
    return res.render("user/detailUser", { user: user });
  },
};

module.exports = controller;
