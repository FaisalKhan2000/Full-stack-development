// * Object Prototypes

// prototype is used to add the methods and properties to the constructor function outside the constuructor function

// contructor function
function Student(fName, lName, roll, cls) {
  (this.firstName = fName),
    (this.lastName = lName),
    (this.rollNo = roll),
    (this.class = cls);
}

let student1 = new Student("faisal", "khan", 39, "A");
let student2 = new Student("nasim", "khan", 42, "C");
let student3 = new Student("riyaz", "khan", 24, "B");
let student4 = new Student("afzal", "khan", 30, "D");

Student.prototype.gender = "male";
// this will show in the [Prototype]]: Object gender: "male"

console.log(student1);
//  we can access the gender property
console.log(student1.gender); // male

Student.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(student1.fullName()); // faisal khan
console.log(student2.fullName()); // nasim khan
console.log(student3.fullName()); // riyaz khan
console.log(student4.fullName()); // afzal khan
