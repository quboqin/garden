// main.js
var mod = require('./lib');

console.log(mod.counter);  // 3
mod.incCounter();
console.log(mod.counter); // 3

console.log(mod.data.name)
mod.changeName()
console.log(mod.data.name)