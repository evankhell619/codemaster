// No.1 Variable 
let firstName;
let lastName;

firstName = "John";
lastName = "Doe";

console.log(firstName,lastName);

// No.2 Tipe Data
let age;
let isStudent;

age = 30;
isStudent = true;

console.log(typeof age);
console.log(typeof isStudent);

// No.3 Operator
let num1;
let num2;

num1 = 10;
num2 = 20;

console.log("Hasil Jumlah : ", num1+num2);
console.log("Hasil Kurang : ",num1-num2);
console.log("Hasil Kali : ",num1*num2);
console.log("Hasil Bagi : ",num1/num2);

// No.4 Conditional Statements
let age2;
age2 = 18; 

if (age >= 18) {
  console.log("Anda sudah dewasa");
} else {
  console.log("Anda belum dewasa");
}

// No.5 Looping
let i = 1;
let j = 10;
let k = 1;
//
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//
while (j >= 1) {
  console.log(j);
  j--;
}
//
do {
  console.log(k);
  k++;
} while (k <= 10);

// No.6 Function
function greet(name) {
  return `Hello, ${name}`;
}

const userName = "John";
const greetingMessage = greet(userName);

console.log(greetingMessage);
//

function calculateArea(width, height) {
  return width * height;
}

const persegiTinggi = 10;
const persegiLebar = 5;

const hasil = calculateArea(persegiLebar, persegiTinggi);

console.log(`Lebar : ${persegiLebar}, Tinggi : ${persegiTinggi}, dan Luas Persegi : ${hasil}`);

// No.7 Array

const fruits = ["Apple" ,"Banana", "Orange"];
console.log(fruits[0]);
//
fruits[1] = "Grape"
console.log(fruits);
//
fruits.push("Mango");
console.log(fruits);
//
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// No.8 Object

let person = {
  name: "Popol",
  age: 30,
  occupation: "Dosen",
};

console.log(`Name: ${person.name}`);

person.age = 35;

person.city = "Jakarta";

for (let i in person) {
  console.log(`${i}: ${person[i]}`);
}

// No.9 Class

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  getQuantity() {
    return this.quantity;
  }

  totalPrice() {
    return this.price * this.quantity;
  }
}

const product1 = new Product("Air Mineral", 5000, 2);

console.log(`Product Name: ${product1.getName()}`);
console.log(`Product Price: Rp${product1.getPrice()}`);
console.log(`Product Quantity: ${product1.getQuantity()}`);
console.log(`Total Product Price: Rp${product1.totalPrice()}`);
