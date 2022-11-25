let Product = require("../models/product");
module.exports.getUser = (req, res, next) => {
  Product.getAllProducts()
    .then((products) => {

      res.render("./user/user", {

        hasProducts: products[0].length > 0,
        products: products[0],

      });
    })
    
    .catch((err) => {
      console.log(err);
    });
};
