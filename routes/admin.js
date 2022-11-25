let express = require("express");
let router = express.Router();
let products = require("../database/product");
let adminController = require("../controllers/admin");

router.get("/", adminController.getShowProduct);

router.get("/add-products", adminController.getADDProducts);
router.post("/add-products", adminController.postAddProduct);

router.get("/edit-products", adminController.getEditProduct);

router.get("/delete-products", adminController.getDeleteProduct);


module.exports = router; //konse path konsa kaam likha ha wo usko export kardega
