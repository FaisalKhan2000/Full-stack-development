const app = require("./app");

console.log(app);
console.log(app.x);
console.log(app.y);
console.log(app.z());

const arr = [1, 2, 3, 4, 5, 6, 7];
const newArr = arr.filter((item) => item >= 4);
console.log(newArr);
