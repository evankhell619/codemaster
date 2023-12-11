// Produk.js

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  displayInfo() {
    console.log(`Product ID: ${this.id} - ${this.name}, Price: $${this.price}`);
  }
}

module.exports = Product;
