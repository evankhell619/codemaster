// Main.js

const Product = require('./produk.js');
const Category = require('./kategori.js');
const ShoppingCart = require('./cart.js');
const Order = require('./pesan.js');

// Contoh penggunaan
const laptopCategory = new Category(1, 'Laptop');
const smartphoneCategory = new Category(2, 'Smartphone');

const laptop = new Product(101, 'Laptop XYZ', 800);
const smartphone = new Product(201, 'Smartphone ABC', 300);

const shoppingCart = new ShoppingCart();
shoppingCart.addItem(laptop, 2);
shoppingCart.addItem(smartphone, 3);

const customerInfo = 'John Doe, johndoe@example.com, 123 Main St';

const order = new Order(shoppingCart, customerInfo);
order.displayOrderSummary();
