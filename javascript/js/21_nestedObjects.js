// Nested Object

let user = {
  id: 101,
  email: "faisal@gmail.com",
  personalInfo: {
    name: "faisal",
    address: {
      street: "abc",
      city: "mumbai",
      state: "maharashtra",
      country: "india",
    },
  },
};

console.log(user);
console.log(user.id);
console.log(user.email);
console.log(user.personalInfo);
console.log(user.personalInfo.name);
console.log(user.personalInfo.address);
console.log(user.personalInfo.address.street);
console.log(user.personalInfo.address.city);
console.log(user.personalInfo.address.state);
console.log(user.personalInfo.address.country);
