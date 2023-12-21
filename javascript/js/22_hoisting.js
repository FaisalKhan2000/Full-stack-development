"use strict";
// * Hoisting (to lift or to pull)

/*
The js default behaviour is that it moves all the declaration at the top according to the current scope
so if it a global varible it moves them at the top of the global scope
or if itb a local varible it moves them at the top of the local scope
and this behaviour of js is called "Hoisting"
*/

// * Hosting in Functions
function hello() {
  console.log("Hello !");
}
hello(); // Hello !

// This is a normal way of writing a function, 1st we declare and then we call the function

// In javascript we can use function before declaration, but the function should be declared before it is called

greet(); // Welcome User
function greet() {
  console.log("Welcome User");
}

// The above function is working because the javascript interpreter before running the code it first moves all the declaration to the top
// so in actual the function which we have written is at the top

// * Hoisting in variables
var a; // declaration
a = 10; // assignment
console.log(a); // 10

console.log(b); // undefined
var b;
b = 20;
// Here we are getting undefined because we know javascript moves all declaration to the top and here it has moved declaration to the top
// and since, there was no assignment, b has been given the value"undefined"

// now we will declare and assign in the same statment
var c = 30; // declaration and assignment
console.log(c); // 30

console.log(d); // undefined
var d = 40;
// * what's actually have been happen here?
// var d;
// console.log(d);
// d = 40;

//  if we declare and assign at the sametime javascript is smart enough to only move the declartion part at the top

// let and const

// console.log(x); // 22_hoisting.js:54 Uncaught ReferenceError: Cannot access 'x' before initialization
// let x;
// x = 10;

//  hosting happens here also js brings the let x at the top
// but like var the js does not assigns / initialized let and const to undefined

// * Strict Mode

// y = 7;
// console.log(y); // 7

// here we have declared the variable but the js interpreter has automatically declared var = y
// to overcome this behaviour of js we can use strict mode by writing "use strict" at the top

// after using strict mode we are getting Uncaught ReferenceError: y is not defined
