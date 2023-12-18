// Object

// Creating Objects
let person = {
  firstName: "faisal",
  lastName: "khan",
  age: 23,
  //   sayHello: function () {
  //     console.log("Hello !");
  //   },
  //   sayHello() {
  //     console.log("Hello !");
  //   },
};

// * Properties in Object

// Adding properties to the object
person.phoneNo = 88888888;
person.height = "5.10";
person.email = "faisal@gmail.com";

// Accessing properties using . notation
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.phoneNo);

// Accessing properties using [] notation
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]);
console.log(person["phoneNo"]);

// Deleting properties
delete person.phoneNo; // person.phoneNo is deleted

// checking if height is present in object
console.log("height" in person); // true
console.log("phoneNo" in person); // false

// * Using for...in to iterate over the enumerable properties of an object

// The for...in loop in JavaScript is used to iterate over the enumerable properties of an object. It's particularly useful for looping through object properties when you want to access or perform operations on each property dynamically.

// for (let key in object) {
//   // Code block to execute for each property
// }

// key: A variable that represents the property name (key) for each iteration.
// object: The object whose enumerable properties will be iterated over.

// printing keys ysing for loop
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// firstName: faisal
// lastName: khan
// age: 23
// height: 5.10
// email: faisal@gmail.com

// * Methods in Object

// "Method" is a function which is associted with an object

// 1st way
person.sayHello = function () {
  console.log("Hello !");
};

// // 2nd way
// function greet() {
//   console.log("Hello !");
// }
// person.sayHello = greet;

// // 3rd way
// let person = {
//   firstName: "faisal",
//   lastName: "khan",
//   age: 23,
//   sayHello: function () {
//     console.log("Hello !");
//   },
// };

// // 4th way | ES6 way
// let person = {
//   firstName: "faisal",
//   lastName: "khan",
//   age: 23,
//   sayHello() {
//     console.log("Hello ");
//   },
// };

person.sayHello(); // Hello !

// Object.keys()
console.log(Object.keys(person));
// ['firstName', 'lastName', 'age', 'height', 'email', 'sayHello']

// Object.values()
console.log(Object.values(person));
// ['faisal', 'khan', 23, '5.10', 'faisal@gmail.com', ƒ]

// Object.entries()
// let entries = Object.entries(person);
// console.log(entries);

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

// firstName: faisal
// lastName: khan
// age: 23
// height: 5.10
// email: faisal@gmail.com
// sayHello: function () {
//   console.log("Hello !");
// }

console.log(person);

// * this

// what is the need of usig this?

// Below you can see that in the first giveDetails() method we are using student.firstName to access the properties of my own object which is not a good way.

// Hence if we are accessing the properties in the same object we should use "this" instead of the classname

let student = {
  firstName: "john",
  lastName: "doe",
  age: 23,

  //   giveDetails() {
  //     console.log(
  //       `Hello my name is ${student.firstName} and i have ${bankDetails.accType} accounts in ${bankDetails.bankName}` // Hello my name is john and i have savings accounts in Kotak mahindra bank
  //     );
  //   },
  giveDetails() {
    console.log(
      `Hello my name is ${this.firstName} and i have ${bankDetails.accType} accounts in ${bankDetails.bankName}` // Hello my name is john and i have savings accounts in Kotak mahindra bank
    );
  },
};

let bankDetails = {
  bankName: "Kotak mahindra bank",
  accType: "savings",
  debitCard: "yes",
};

student.giveDetails();
