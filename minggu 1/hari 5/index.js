// const person = {
//   name: 'John',
//   age : 20,

//   greet () {
//     console.log(`Hello, My name is ${this.name}`);
//   },
// }

///////instansiasi dan class

// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   greet() {
//     console.log(`hello im ${this.name}`);
//     console.log(`my age: ${this.age}`);
//   }
// }

// const person = new Person ('John' , 67)
// person.greet()

////inheriten
class Animal {
  constructor(name) {
    this.name = name 
  }
  
  speak() {
    console.log(`${this.name} make sound`);
  }
}

class Bird extends Animal {}

const tweety = new Bird ('Tweet')
tweety.speak() 

