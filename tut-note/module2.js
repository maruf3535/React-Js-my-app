// import xfdsa from './module1.mjs';
// import {name, age} from './module1.mjs';
// console.log(name)
// console.log(xfdsa)
// console.log(age)

const module2 = require('./module1')
console.log(module2.values.name)
console.log(module2.values.type)
console.log(module2.values.age)