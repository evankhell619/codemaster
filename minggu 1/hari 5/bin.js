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
