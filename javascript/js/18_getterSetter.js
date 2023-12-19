// * getter

// let person = {
//   firstName: "faisal",
//   lastName: "khan",
//   age: 23,

//   // Without get (using function)
//   // If we are using a function  to get the fullname in uppercase then we have to console.log(person.getFullName())
//   //   getFullName: function () {
//   //     return this.fullName.toUpperCase();
//   //   },

//   // with get (without using function)
//   get getFullName() {
//     return this.fullName.toUpperCase();
//   },
// };

// person.fullName = `${person.firstName} ${person.lastName}`;

// console.log(person);
// // console.log(person.getFullName()); // without using get (we have to access it like a method)
// console.log(person.getFullName); // using get (we can access it like a property)

// * we use getter function to get the values of any properties by manipulating it, incase of getFullName() we have capitalize the fullName

// * setter

let person = {
  age: 23,

  set setName(n) {
    this.name = n.toUpperCase();
  },
};

console.log(person);

person.setName = "nasim khan";

console.log(person);

// Setter is used to maniuplate the value before saving

// example

let temperature = {
  // Intitally the celcius value is set to 0
  _celsius: 0,

  // now whenever anyone use the setCelsius it will set the _celsius to any value
  // temperature.setCelsius = 100
  // now the _celsius is set to 100
  set setCelsius(n) {
    this._celsius = n;
  },

  get getCelsius() {
    return this._celsius;
  },

  get getFahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  },
};

console.log(temperature);

temperature.setCelsius = 100;
console.log(temperature.getCelsius);
console.log(temperature.getFahrenheit);

console.log(temperature);
