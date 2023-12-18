// 1. Arithmetic operators:

let a = 10;
let b = 5;

let addition = a + b; // Addition
let subtraction = a - b; // Subtraction
let multiplication = a * b; // Multiplication
let division = a / b; // Division
let modulus = a % b; // Modulus (Remainder)
let exponentiation = a ** b; // Exponentiation

console.log(addition); // 15
console.log(subtraction); // 5
console.log(multiplication); // 50
console.log(division); // 2
console.log(modulus); // 0
console.log(exponentiation); // 100000

// 2. Assignment Operators:
let x = 5;
x += 3; // Equivalent to x = x + 3
x -= 2; // Equivalent to x = x - 2
x *= 4; // Equivalent to x = x * 4
x /= 2; // Equivalent to x = x / 2
x %= 3; // Equivalent to x = x % 3

console.log(x);

// 3. Comparison Operators:

let c = 10;
let d = 5;

console.log(c > d); // Greater than
console.log(c < d); // Less than
console.log(c >= d); // Greater than or equal to
console.log(c <= d); // Less than or equal to
console.log(c === d); // Equal to (Strict equality)
console.log(c !== d); // Not equal to (Strict inequality)

// == double equal only checks the value and ignores the datatype
console.log("==", "5" == 5); // true
console.log("==", 6 == 5); // false

// === triple equals checks both value and datatype
console.log("===", "5" === 5); // false
console.log("===", 5 === 5); // true

// 4. Logical Operators:

let raining = true;
let temperature = 15;

if (raining && temperature < 20) {
  console.log("It's raining and cold.");
}

if (raining || temperature < 20) {
  console.log("It's either raining or cold.");
}

if (!raining) {
  console.log("It's not raining.");
}

/*
In JavaScript, `==` and `===` are comparison operators used to check for equality, but they behave differently:

- `==` is the abstract equality operator. It compares two values after converting them to a common type. It performs type coercion if the compared values are of different types before making the comparison.

- `===` is the strict equality operator. It checks for equality without performing type conversion. It compares both the value and the type, ensuring that both values are of the same type to be considered equal.

Here are examples to illustrate the difference:

### Abstract Equality (`==`)
```javascript
console.log(5 == '5'); // true, because it performs type coercion (converts string to number)

console.log(0 == false); // true, because both are falsy values after type coercion
```

### Strict Equality (`===`)
```javascript
console.log(5 === '5'); // false, because they are of different types (number vs. string)

console.log(0 === false); // false, because they are of different types (number vs. boolean)
```

In general, it's often recommended to use `===` (strict equality) as it avoids unexpected behavior that might occur due to type coercion. It ensures both value and type match, leading to more predictable code. Use `==` only if you specifically need type coercion and understand its implications.

*/
