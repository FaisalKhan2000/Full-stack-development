// Functions in JavaScript are blocks of reusable code that can be defined and then called or invoked to perform a specific task. They are fundamental in organizing and executing code efficiently.

// * Function Declaration:
// function greet() {
//   console.log("Hello!");
// }

// greet(); // Calling the function

// * Function with Parameters:
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Alice"); // Output: "Hello, Alice!"

// * Function with Return Value:
function add(a, b) {
  return a + b;
}

let sum = add(3, 5);
console.log(sum); // Output: 8

// * Functions with multiple arguments

function add1() {
  if (arguments.length === 0) {
    console.log("No parameters passed !");
  } else {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    console.log(sum);
  }
}

add1(1);
add1(1, 2);
add1(1, 2, 3);
add1(1, 2, 3, 4);

// * Global v/s Local variable

let globalSum = 69;
function add2() {
  let localSum = 96;

  console.log(localSum); // local sum can be accessed only in the function in which it is defined
  console.log(globalSum); // global sum can be accessed anywhere
}

add2();
// console.log(localSum); // localSum cannot be accessed outside of the function

// * Anonymous Functions

// * Basic Anonymous Function
// Function expression
let greet1 = function () {
  console.log("Hello!");
};

greet1(); // Output: "Hello!"

// * Anonymous Function with callback
// anonymous functions can be used in setTimeout or many other methods like it
setTimeout(function () {
  console.log("Hello!");
}, 3000);

// Here, an anonymous function is passed as a callback to setTimeout.

// Benefits of Anonymous Functions:
// They're useful for one-time use or as callback functions.
// They prevent polluting the global namespace by avoiding unnecessary function declarations.

// * Immediately Invoked Function Expression (IIFE)

// An immediately invoked function expression (IIFE) in JavaScript is a function that is declared and executed immediately after it's defined. It's a common pattern used to create a local scope and prevent variable hoisting or to encapsulate code.

// (function() {
//   // Your code here
// })();

// Example 1: Basic IIFE
(function () {
  let message = "Hello! I am an IIFE";
  console.log(message);
})();
// Output: "Hello! I am an IIFE"

// Example 2: Passing Arguments to IIFE
(function (name) {
  console.log(`Hello, ${name}!`);
})("Alice");
// Output: "Hello, Alice!"

// Benefits of IIFE:
// Encapsulation: Variables inside the IIFE are scoped locally, preventing pollution of the global scope.
// Variable Isolation: Helps avoid naming conflicts or accidental modifications of global variables.
// Module Pattern: Used to create modules or pieces of code that can operate independently without affecting other parts of the codebase.
// Usage:
// Often seen in scenarios where a block of code needs to be executed immediately and is not needed elsewhere in the code.
// Commonly used in JavaScript libraries, for example, to encapsulate functionality and avoid namespace collisions.
// IIFEs are a powerful JavaScript pattern allowing code to be executed immediately within its own scope, providing a clean way to encapsulate logic and variables while avoiding global scope pollution.

(function (num1, num2) {
  console.log(num1 + num2);
})(3, 4); // 7
