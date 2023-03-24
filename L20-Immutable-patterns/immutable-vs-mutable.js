/**
 * IMMUTABLE DATA
 * Primitive values
 */

let myString = "Hello, world!"
let copyString = myString;

// console.log(
//   myString,
//   copyString
// )

myString = "another thing..."
copyString = "unique"

// console.log(
//   myString,
//   copyString
// )






/**
 * MUTABLE DATA
 * More complex data structure
 * arrays, objects
 */
const movies = ['Titanic', 'Matrix'];  // actually storing a reference or a place in memory
const moviesCopy = movies;
console.log(movies === moviesCopy);

// console.log(
//   movies,
//   moviesCopy
// );

movies.push('Matrix Reloaded');

// console.log(
//   movies,
//   moviesCopy
// );

/**
 * How to make a copy?
 */

const animals = ["dog", 'cat'];
const animalsCopy = [...animals];
console.log(animals, animalsCopy);
console.log(animals === animalsCopy);