function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

cat = {
  name: 'keke',
  color: 0xffffff,
  type: '美短',
  foods: ['mouse', 'fish', 'can'],
  eat: function() {
    console.log(`eat ${this.foods[getRandomInt(3)]}`)
  }
}

cat.eat()

console.log(3.1415926.toString().length)

// function Cat() {
//   console.log(`I am a ${Cat.color} cat, my name is ${Cat.n}`)
// }

// Cat.color = 'white'
// Cat.n = 'keke'
// Cat('white', 'keke')

function Cat(color, name) {
  this.color = color
  this.name = name
  // console.log(`I am a ${this.color} cat, my name is ${this.name}`)
}

const blackCat = new Cat('black', 'xiaohei')
console.log(`${blackCat.name} is a ${blackCat.color} cat`)

const whiteCat = new Cat('white', 'keke')
console.log(`${whiteCat.name} is a ${whiteCat.color} cat`)

Cat.prototype.foods = ['mouse', 'fish', 'can']
Cat.prototype.eat = function() {
  console.log(`eat ${this.foods[getRandomInt(Cat.prototype.foods.length)]}`)
}

blackCat.eat()
whiteCat.eat()

console.log(`${Cat.color}, ${Cat.prototype.color}`)

function Dog(color, name) {
  this.color = color
  this.name = name
  // console.log(`I am a ${this.color} cat, my name is ${this.name}`)
}