# Objects in JS

## 1. Primitive Types vs Object Types

We can divide data in JavaScript into two big categories.

### Primitive Types

There's seven primitive types we can work with:

```javascript
const bool = true;
const nul = null;
const undef = undefined;
const num = 15;
const str = "Hello World";
const bigInt = 9007199254740991n;
const sym = Symbol('symbol');
```

### Object Types

There's three major objects to work with:

```javascript
// objects are objects
const person = {
  name: 'Virgina',
  last_name: 'Woolf',
  occupation: 'writer'
};

// arrays are objects
const booksList = [
  'One Hundred Years of Solitude',
  'For Whom the Bell Tolls',
  'King Lear',
];


// functions are objects
const sayHello = (name) => {
  console.log(`Hello, ${name}`)
}
```

## 2. Objects
---

Objects are composed of key-value pairs.
Keys are always strings, the values can contain any data type.
When we put a function as the value of a key, then we call that function a **method**

```javascript
// name is the key
// "santa's little helper" is the value

const dog = {
  name: "Santa's Little Helper",
  breed: 'Greyhound',
  age: 15,
  eatDogFood: () => console.log("eating dog food...")
}
```

We can access values of the object in one of two ways (note that accessing non-existent keys returns undefined):

```javascript
console.log(dog.name) // This is dot notation
console.log(dog["name"]) // This is bracket notation
```

We can also mutate any of these values
```javascript
dog.name = "Chancla"    // This is dot notation
dog["name"] = "Chancla" // This is bracket notation
```

We can execute functions inside objects (**methods**)
```javascript
dog.eatDogFood() // outputs "eating dog food..." in console
```

Using `for...in` you can iterate over the keys of an object

```javascript
// Object iteration
var obj = {
  first: "uno",
  second: "dos",
  "3": "tres"
};

for (var key in obj) {
  console.log(key, obj[key]); // key, value
};
```

## 3. `this` keyword
---

You can use the `this` keyword inside of a method to access any of the keys in the object that contains such method:

```javascript
const person = {
  firstName: 'John',
  lastName: 'Smith',
  age: 31,
  fullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(person.fullName()) // outputs "John Smith" in console
```

It's very important to keep in mind that, in order for `this` to work this way, you need to define the methods as normal vanilla functions, and NOT as arrow functions.

## 4. How Functions and Data Types interact (Pass-by-value)
---

In JavaScript, when you execute a function and pass a variable into the arguments of the function, you are not really passing the variable into the function, you are just passing a copy of the value associated to that variable.

```javascript
let age = 10

// function definition
function increment(x) {
  x = x + 1;
  console.log(x)
}

// function execution
increment(age) // logs 11
console.log(age); // logs 10, because we never modified the original variable, we worked with a copy

```

But when working with objects this changes a little, because Object Types are passing a copy of the reference to the value. This means that you can't assign something new to the object that was passed as a reference, but you do can mutate that object by accessing its properties and assign them to something different.

```javascript
// object cannot be replaced
function emptyObj(obj) {
  obj = {}
  console.log(obj)
}

const student = {
  name: 'John'
}

emptyObj(student) // logs {}
console.log(student) // logs { name: 'John' }

// But we can mutate the reference, and change everything that is pointing to that same reference
const ogPerson = { name: "maui" }
const personCopy = ogPerson // both variables are pointing/referencing the same object

// if i modify the original
ogPerson.age = 26;

// then both the original and its copies will change, because they point to the same object
console.log(ogPerson)    // { name: "maui", age: 26 }
console.log(personCopy)  // { name: "maui", age: 26 }
```

### Immutable vs Mutable

The reason we have pass-by-value and pass-by-ref comes to JavaScript’s data & structure types. These can all be thrown into one of these two categories: 
- **Primitive values are immutable**
- **...and almost everything else is mutable**

With mutable being *prone to change*, and immutable being *not capable of or susceptible to change*.
