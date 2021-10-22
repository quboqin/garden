function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Cat(color, name) {
  this.color = color
  this.name = name
}

Cat.prototype.foods = ['mouse', 'fish', 'can']

function Dog(color, name) {
  this.color = color
  this.name = name
}

Dog.prototype.foods = ['bone', 'sausage']

function Animal() {}

Animal.prototype.eat = function() {
  console.log(`${this.name} eat ${this.foods[getRandomInt(this.foods.length)]}`)
}

Cat.prototype.__proto__ = Animal.prototype
Dog.prototype.__proto__ = Animal.prototype

const blackCat = new Cat('black', 'xiaohei')
const whiteCat = new Cat('white', 'keke')

const yellowDog = new Dog('yellow', 'dahuang')
const bearDog = new Dog('white', 'kaixin')

blackCat.eat()
whiteCat.eat()

yellowDog.eat()
bearDog.eat()

Object.prototype.sleep = function() {
  console.log(`${this.name} is Zzzzz`)
}

whiteCat.sleep()
bearDog.sleep()

var CatFunc = new Function('name', 'color', 'console.log(`${name} is a ${color} cat`)')
CatFunc('keke', 'blue')
