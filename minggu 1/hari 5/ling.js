class Cirle {
  constructor(radius) {
    this.radius = radius
  }

  area() {
    return Math.PI * this.radius * this.radius
  }
}

const cirle1 = new Cirle(5)
const cirle2 = new Cirle(6)

console.log(cirle1.area());
console.log(cirle2.area());
