/* 
  What is `this` 

  refers to the object who contains the method
*/

const person = {
  firstName: 'John',
  lastName: 'Smith',
  age: 31,
  fullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

const car = {
  make: "Ford",
  model: "Mustang",
  color: "Blue",
  mileage: 5000,
  drive: function(distance) {
    this.mileage += distance
  }
}