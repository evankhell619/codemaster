import "./style.css"
// import Greet from './Greet.js'
import Greet from './greet'

const greet = new Greet('Popolllll')

const app = document.getElementById('app') 
app.innerHTML = greet.sayHello()

