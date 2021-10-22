// 一切都是对象, reference values are objects, primitive values are still objects, 
// When you invoke a method on a primitive number, the number temporarily gets converted to an object and then the method executes. See the following examples:
// Primitive Values..

let testString = 'Hello World';
let testString1 = testString;
console.log('testString:', testString); // Hello World 
console.log('testNumber:', testString1 ); // Hello World

testString1  = 123;

console.log('testString:', testString); // Hello World
console.log('testNumber:', testString1 ); // 123

// Reference Values ..

let testObject = {
  name : 'Chandler',
  age: 28,
  address: 'New York'
};

let testObject1 = testObject;

console.log('testObject:', testObject.name);    // Chandler
console.log('testObject1:', testObject1.name);  // Chandler

testObject1.name = 'Janice';

console.log('testObject:', testObject.name);    // Janice
console.log('testObject1:', testObject1.name); // Janice

console.log(false.toString()); // 'false'
console.log([1, 2, 3].toString()); // '1,2,3'
console.log(2..toString())
// console.log(2.toString())
const n1 = 5
console.log(n1.toString())

function Foo(){}
Foo.bar = 1;
Foo.bar; // 1


var obj = {
  bar: 1,
  foo: 2,
  baz: 3,
  1234: 5,
  case: 6,
  delete: 7
};
obj.bar = undefined;
obj.foo = null;
delete obj.baz;

for(var key in obj) {
  if (obj.hasOwnProperty(key)) {
      console.log(key, '' + obj[key]);
  }
}

var fn = Function('x', 'y', 'return x + y;');
fn.result = 4
console.log(fn(1, 2), fn.result)