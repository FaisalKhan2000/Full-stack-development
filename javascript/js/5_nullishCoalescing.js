// Nullish coalescing, represented by the ?? operator in JavaScript, provides a way to handle default values for variables that might be null or undefined. It returns the right-hand operand when the left-hand operand is null or undefined; otherwise, it returns the left-hand operand.

// let result = someVariable ?? defaultValue;

let x = null;
let y = 20;

let result = x ?? y;
console.log(result); // Outputs: 20, because x is null, so it uses the right-hand side (y)

// Use Cases:
// Default Values: Assigning a default value to a variable if it's null or undefined.

let username = null;
let defaultName = "Guest";

let displayName = username ?? defaultName;
console.log(displayName); // Outputs: "Guest", because username is null

// Avoiding Falsy Values: It specifically checks for null or undefined, not other falsy values like 0, '', or false.

let value = 0;
let defaultValue = 10;

let result1 = value ?? defaultValue;
console.log(result1); // Outputs: 0, because 0 is not null or undefined
