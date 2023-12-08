class Animal {
  constructor(name, age = null) {
    this.name = name
    this.age = age
  }
  speak() {
    console.log(`${this.name} makes a noise.`)
  }
}

export class Bird extends Animal {
  constructor(color, name) {
    super(name)
    this.color = color
  }

  speak() {
    console.log(`${this.name} chirps.`)
  }

  getColor() {
    return this.color
  }
}
export class Dog extends Animal {
  speak() {
    console.log('Woof!')
  }
}
export class Cat extends Animal {
  speak() {
    console.log('Meow...')
  }
}
export class Tiger extends Animal {}
