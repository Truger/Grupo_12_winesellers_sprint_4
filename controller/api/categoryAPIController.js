const { Category } = require("../../database/models");
const { validationResult } = require("express-validator");


const controller = {

  index: (req, res) => {
    Category
    .findAll()
    .then(Category => {
        return res.status(200).json(Category);
    })
    .catch(error => {
        console.log(error)
        return res.status(401).json(error);
    });

}
};

module.exports = controller;