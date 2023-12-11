// KeranjangBelanja.js

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    this.items.push({ product, quantity });
  }

  calculateTotal() {
    return this.items.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  }

  displayCart() {
    console.log("Shopping Cart Contents:");
    this.items.forEach((item) => {
      console.log(`${item.product.name} - Quantity: ${item.quantity}`);
    });
    console.log(`Total: $${this.calculateTotal()}`);
  }
}

module.exports = ShoppingCart;
