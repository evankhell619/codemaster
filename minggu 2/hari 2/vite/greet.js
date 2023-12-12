export default class Greet {
  constructor(name) {
    this.name = name || 'Anonymous'
  }
  sayHello() {
    return ` Hello ${this.name}`
  }
}

