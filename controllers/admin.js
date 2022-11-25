// let products = require("../database/product");
let Product = require("../models/product");

module.exports.getShowProduct = (req, res, next) => {
  Product.getAllProducts()
    .then((products) => {
      console.log(products[0]);

      res.render("./admin/admin", {
        products: products[0],
        hasProducts: products[0].length > 0,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getADDProducts = (req, res, next) => {
  res.render("./admin/addProducts");
};

module.exports.postAddProduct = (req, res, next) => {
  let name = req.body.name;
  let price = req.body.price;
  let description = req.body.description;
  let image = req.body.image;

  let newProduct = new Product(name, price, description, image);
  newProduct
    .save()
    .then(() => {
      res.redirect("/admin");
    })
    .catch((err) => {
      console.log(err);
    });

  //   res.redirect("/admin");
};

module.exports.getEditProduct = (req, res, next) => {
  let productId = req.query.id;
  Product.getProductById(productId)
    .then((products) => {
      let product = products[0];
      console.log("Product", product);
      res.render("./admin/editProduct", {
        product: product[0],
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports.getDeleteProduct = (req, res, next) => {
  let productId = req.query.id;
  Product.deleteProductbyId(productId)

    .then(() => {
      res.redirect("/admin");
    })
    .catch((err) => {
      console.log(err);
    });
};
