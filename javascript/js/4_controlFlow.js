// if Statement:
// The if statement executes a block of code if a specified condition is true.

// let num = 10;

// if (num > 0) {
//   console.log("Number is positive");
// }

// else if Statement:
// The else if statement allows you to specify a new condition if the previous condition is false.

let num = -5;

if (num > 0) {
  console.log("Number is positive");
} else if (num < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}

// else Statement:
// The else statement is used with if to specify the block of code that executes when the if condition is false.

let hour = 14;

if (hour < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}

// Nested Conditionals:
// You can also nest conditional statements within each other for more complex checks.

let x = 10;
let y = 5;

if (x === y) {
  console.log("x and y are equal");
} else {
  if (x > y) {
    console.log("x is greater than y");
  } else {
    console.log("y is greater than x");
  }
}
