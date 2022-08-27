/* 
  How data types and functions interact 
*/

// Pass by value

let age = 10

// function definition
function increment(x) {
  x = x + 1;
}

// function execution
increment(age)

// console.log(age) // 1


// object cannot be replaced
function emptyObj(obj) {
  obj = {}
  console.log(obj)
}
const student = {
  name: 'John'
}
emptyObj(student)
console.log(student)