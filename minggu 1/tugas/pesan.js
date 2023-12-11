// Pesanan.js

class Order {
  constructor(cart, customerInfo) {
    this.cart = cart;
    this.customerInfo = customerInfo;
    this.orderDate = new Date();
  }

  displayOrderSummary() {
    console.log("Order Summary:");
    this.cart.displayCart();
    console.log(`Order Date: ${this.orderDate}`);
    console.log(`Customer Information: ${this.customerInfo}`);
  }
}

module.exports = Order;
