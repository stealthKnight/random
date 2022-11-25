// let products = require("../database/product");

let db = require("../util/database");

module.exports = class Products {
  constructor(name, price, description, image) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
  }
  save() {
    return db.execute(
      `INSERT INTO PRODUCTS(name,price,description,image) VALUES(?,?,?,?)`,
      [this.name, this.price, this.description, this.image]
    );
  }
  static getAllProducts() {
    return db.execute(`SELECT * FROM products`);
  }

  static getProductById(id) {
    return db.execute(`SELECT * FROM products WHERE id=?`, [id]);
  }
  static deleteProductbyId(id) {
    return db.execute(`DELETE FROM PRODUCTS WHERE id=?`, [id]);
  }
};
