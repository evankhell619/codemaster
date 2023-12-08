const product = [
{id: 1, name: "Laptop", price: 8, quantity: 2},
{id: 2, name: "Pen", price: 80, quantity: 8},
{id: 3, name: "Book", price: 80, quantity: 2},
{id: 4, name: "Cars", price: 55, quantity: 6},
{id: 5, name: "Tshirt", price: 86, quantity: 2},
];

// product.map((item, index) => {
//   console.log(price);
// } )

const total = product.reduce((total, item) => {
  console.log(total);
  console.log(item);

  return total + item.price * item.quantity
},0)

console.log(total);
