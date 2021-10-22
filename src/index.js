globalThis.age = 19

function Counter(start, name) {
  var count
  if (start) {
    count = start;
  }
  this.name = name
  console.log(this.age)
  var that = this
  // return {
  //   increment: function () {
  //     count++;
  //   },

  //   get: function () {
  //     return count;
  //   },

  //   getName: function () {
  //     return that.name
  //   }
  // }
}

Counter.prototype.level = 1

var foo = new Counter(4, 'Qi');
// foo.increment();
console.log(`level = ${foo.level}`)
foo.level = 2
// console.log(`${foo.get()} ${foo.getName()} ${globalThis.name}`)

var bar = new Counter(null, 'Wen');
// bar.increment();
console.log(`bar  ${bar.level}`)

// var fooBar1 = new Counter(4, 'Qi')
// fooBar1.increment()
// console.log(`${fooBar1.get()} ${fooBar1.getName()}`)

// var fooBar2 = new Counter(null, 'Wen')
// fooBar2.increment()
// console.log(`${fooBar2.get()} ${fooBar2.getName()}`)

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype.type = "猫科动物";

Cat.prototype.eat = function () { console.log("吃老鼠") };

var cat1 = new Cat('Qi', 'White')
cat1.eat()
cat1.type = '熊'
console.log(cat1.type, Cat.prototype.type)

var cat2 = new Cat('Panda', 'Black and White')
console.log(cat2.type)


// Immediately-Invoked Function Expressions

cat = {
  name: 'keke',
  color: 0xffffff,
  type: '美短',
  food: 'mouse',
  eat: function() {
    console.log(`eat ${this.food}`)
  }
}

cat.eat()