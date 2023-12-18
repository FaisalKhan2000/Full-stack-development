// Primitive Data Types:

// Number: Represents numeric values. It includes integers and floating-point numbers.
let num = 10;
let floatNum = 3.14;
console.log(num);
console.log(floatNum);

console.log(typeof num);
console.log(typeof floatNum);

// String: Represents textual data enclosed in single or double quotes.
let text = "Hello, world!";
console.log(text);

console.log(typeof text);

// Boolean: Represents a logical value of true or false.
let isTrue = true;
let isFalse = false;
console.log(isTrue);
console.log(isFalse);

console.log(typeof isTrue);
console.log(typeof isFalse);

// Undefined: Represents a variable that has been declared but not assigned a value.
let undefinedVar;
console.log(undefinedVar);
console.log(typeof undefinedVar);

// Null: Represents the absence of any value.
let nullValue = null;
console.log(typeof nullValue); // typeof null returning "object" (this is considered a bug in JavaScript that can't be fixed due to backward compatibility reasons).

// Symbol (Introduced in ES6): Represents a unique and immutable value.
const sym = Symbol("unique");
console.log(typeof sym);
