var Module = function() {
  // private scope begin
  let firstName = 'Qubo'
  let lastName = 'Qin'
  let info = {
    sex: 'male',
    age: 30
  }

  function fullName() {
    return `${firstName} ${lastName}`
  }

  function sayHello() {
    console.log(`Hello ${info.sex === 'male' ? 'Mr' : 'Ms'} ${fullName()}`);
  }

  function setFirstName(_firstName) {
    firstName = _firstName
  }

  function setLastName(_lastName) {
    lastName = _lastName
  }
  // private scope end

  // export apis
  return {
    sayHello: sayHello,
    setFirstName: setFirstName,
    setLastName: setLastName,
    info: info
  };
};

var module1 = new Module();
module1.setFirstName('Q')
module1.info.sex = 'female'
module1.sayHello();

var module2 = new Module();
module2.setLastName('Q')
module2.sayHello();

var moduleA = Module()
moduleA.setFirstName('A')
moduleA.info.sex = 'female'
moduleA.sayHello()

var moduleB = Module()
moduleB.setLastName('B')
moduleB.sayHello()