const { log } = require("console");
const mod = require("./module.js");
const {iniFS} = require("./fs.js")

const name =mod.greet("Kupa")

// console.log(name)

// // console.log(mod.groot);
// console.log(iniFS);

//matik.js
// const matik = require('./matik.js')
// console.log(matik.addNum(5,6))
// console.log(matik.subNum(5,6))
// ;

//formatter 
// import * as formatter from './formatter.js'
const formatter = require('./formatter.js')
console.log(formatter.moneyFormat(5000.6))
console.log(formatter.dateFormat(new Date()))
;
