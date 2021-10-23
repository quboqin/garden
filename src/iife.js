var module

(function() {
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
  window.module = {
    sayHello: sayHello,
    setFirstName: setFirstName,
    setLastName: setLastName,
    info: info
  }
})(window);
