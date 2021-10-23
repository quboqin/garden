// lib.js
var counter = 3;
var data = {
  name: 'Qubo'
}
function incCounter() {
  counter++;
}
function changeName() {
  data.name = 'Qin'
}
module.exports = {
  counter: counter,
  data: data,
  incCounter: incCounter,
  changeName: changeName
};