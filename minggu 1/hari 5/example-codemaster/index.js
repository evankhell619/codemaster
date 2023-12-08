import { Person } from './Person.js'
import { Bird, Dog, Cat, Tiger } from './Animal.js'
const john = new Person('John', 25)
john.greet()

const jane = new Person('Jane', 23)
jane.greet()

const tweety = new Bird('Yellow', 'Tweety')
const heli = new Dog('Heli')
const aurora = new Cat('Aurora')
const macaaaan = new Tiger('Macaaaan')

tweety.speak()
console.log(tweety.getColor())

heli.speak()
aurora.speak()
macaaaan.speak()

console.log(tweety)
console.log(Object.keys(tweety).length > 0)
