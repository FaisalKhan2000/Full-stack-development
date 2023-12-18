// Type conversion, also known as type casting or coercion, is the process of converting a value from one data type to another in JavaScript. This conversion can be explicit or implicit.

// 1. Explicit Type Conversion:
// Using Conversion Functions:
// JavaScript provides various functions to perform explicit type conversions:

//  - String(): Converts a value to a string.
let num1 = 123;
let str1 = String(num1); // Converts number to string
console.log(str1);
console.log(typeof str1);

//  - Number(): Converts a value to a number.
let str2 = "456";
let num2 = Number(str2); // Converts string to number
console.log(num2);
console.log(typeof num2);

// - Boolean(): Converts a value to a boolean.
let val = 1;
let bool = Boolean(val); // Converts number to boolean (false for 0, true otherwise)
console.log(bool);
console.log(typeof bool);

// 2. Implicit Type Conversion:
// JavaScript also performs implicit type conversion automatically in certain operations, where values of one type are used in a context that expects a different type:

let x = 5 + ""; // Implicitly converts number to string (concatenation)
console.log(typeof x); // Outputs: "string"

let y = "10" - 5; // Implicitly converts string to number (subtraction)
console.log(y); // Outputs: 5

// Coercion:
// JavaScript performs type coercion when comparing values with == or != (abstract equality operators). It tries to convert operands to a common type before making the comparison, which might lead to unexpected results.

console.log(5 == "5"); // true, due to type coercion (string '5' is converted to number 5)
console.log(0 == false); // true, due to type coercion (false is converted to 0)
