let express = require("express");
let router = express.Router();
// let products = require("../database/product");
let userController = require("../controllers/user");
router.get("/", userController.getUser);

module.exports = router;
