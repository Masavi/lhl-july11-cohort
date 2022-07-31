/* 
  What are Objects? Why should i care?

  key-value pairs
  keys are always strings
  value can be anything
  functions inside objects are called methods
*/

const dog = {
  name: "Santa's Little Helper",
  breed: 'Greyhound',
  age: 15,
  eatDogFood: () => console.log("eating dog food... 🐶")
}

// How to read and access values

// dot notation / bracket notation / nonexistent key returns undefined


// How to modify values

// Object iteration

var obj = {
  first: "uno",
  second: "dos",
  "3": "tres"
};

for (var key in obj) {
  console.log(key, obj[key]);
};

// Object is unordered