/* 
  Primitive Data
*/

const bool = true;
const nul = null;
const undef = undefined;
const num = 15;
const str = "Hello World";
const bigInt = 9007199254740991n;
const sym = Symbol('symbol');

/* 
  Everything else... is an OBJECT
*/

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

// console.log('sayHello is of type...', sayHello instanceof Object);