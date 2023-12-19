// what is the need of object constructor function

student1 = {
  firstName: "faisal",
  lastName: "khan",
  rollNo: 39,
  class: "A",
};

console.log(student1);

student2 = {
  firstName: "nasim",
  lastName: "khan",
  rollNo: 78,
  class: "C",
};
console.log(student2);

// here we are creating the same object which consists of firstName, lastName, rollNo and class
// we can use a constuctor to overcome this problem by creating a single constructor function

// contructor function
function Student(fName, lName, roll, cls) {
  (this.firstName = fName),
    (this.lastName = lName),
    (this.rollNo = roll),
    (this.class = cls);
}

let student3 = new Student("riyaz", "khan", 24, "B");
let student4 = new Student("afzal", "khan", 30, "D");

console.log(student3);
console.log(student4);

student1.name = function () {
  return `${this.firstName} ${this.lastName}`;
};
student1.age = 23;
// this propertis has only been added to student1 and not on the constructor function
console.log(student1);
console.log(student1.name());

// * we can added any properties to the contructor function itself using object prototype
