import "./style.css"
// import Greet from './Greet.js'
import Greet from './greet'

const greet = new Greet('Popol')

const app = document.getElementById('app') 
app.innerHTML = greet.sayHello()

