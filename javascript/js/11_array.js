// Arrays in JavaScript are versatile and used to store multiple values in a single variable. They can hold various data types (numbers, strings, objects, etc.) and are defined using square brackets [].

// * Creating Arrays:
// You can create arrays in several ways:

// 1. Literal Array:
let fruits = ["Apple", "Banana", "Orange"];

// 2. Using new Array():
let numbers = new Array(1, 2, 3, 4, 5);

// 3. Empty Array:
let emptyArray = [];

// * Accessing Array Elements:
// Array elements are accessed using zero-based index.

// let fruits = ['Apple', 'Banana', 'Orange'];

console.log(fruits[0]); // Output: "Apple"
console.log(fruits[1]); // Output: "Banana"

// * Array Properties and Methods:
// Arrays have properties and methods to manipulate and access their elements.

// * Properties:

// length: Returns the number of elements in an array.
// let fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits.length); // Output: 3

// * Methods:

// * Mutator Methods (Modify the Original Array):
// push(), pop():

// push() adds elements to the end of an array, and pop() removes the last element.
let fruits1 = ["Apple", "Banana", "Orange"];
fruits1.push("Mango");
console.log(fruits1); // Output: ['Apple', 'Banana', 'Orange', 'Mango']

fruits1.pop();
console.log(fruits1); // Output: ['Apple', 'Banana', 'Orange']

// shift(), unshift():
// shift() removes the first element of an array, and unshift() adds elements to the beginning.
let fruits2 = ["Apple", "Banana", "Orange"];
fruits2.shift();
console.log(fruits2); // Output: ['Banana', 'Orange']
fruits2.unshift("Mango");
console.log(fruits2); // Output: ['Mango', 'Banana', 'Orange']

// splice():
// splice() adds/removes elements from an array.
let fruits3 = ["Apple", "Banana", "Orange"];
fruits3.splice(1, 1, "Mango", "Grapes");
console.log(fruits3); // Output: ['Apple', 'Mango', 'Grapes', 'Orange']

// * Accessor Methods (Do Not Modify the Original Array):

// concat(): concat() merges arrays and returns a new array.
let fruits4 = ["Apple", "Banana"];
let moreFruits = ["Orange", "Mango"];
let allFruits = fruits4.concat(moreFruits);
console.log(allFruits); // Output: ['Apple', 'Banana', 'Orange', 'Mango']

// slice(): slice() extracts a portion of an array into a new array.
let fruits5 = ["Apple", "Banana", "Orange", "Mango"];
let subset = fruits5.slice(1, 3);
console.log(subset); // Output: ['Banana', 'Orange']

// * Iteration Methods:

// for()
let fruits7 = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits7.length; i++) {
  console.log(fruits7[i]);
}

// forEach(): forEach() executes a provided function once for each array element.
let fruits6 = ["Apple", "Banana", "Orange"];
fruits6.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});
// Output:
// Index 0: Apple
// Index 1: Banana
// Index 2: Orange

// map(): map() creates a new array by applying a function to each element of an array.
let numbers1 = [1, 2, 3];
let doubled = numbers1.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6]

// filter(): filter() creates a new array with elements that pass a test.
let numbers2 = [1, 2, 3, 4, 5];
let evenNumbers = numbers2.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
