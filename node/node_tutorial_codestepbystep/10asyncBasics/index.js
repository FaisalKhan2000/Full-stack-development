// console.log("task A");
// console.log("task B");
// console.log("task C");

// task A
// task B
// task C

// console.log("task A");
// setTimeout(() => {
//   console.log("task B");
// }, 3000);
// console.log("task C");

// task A
// task C
// task B

// let a = 20,
//   b = 0;

// setTimeout(() => {
//   b = 30;
// }, 3000);

// console.log(a + b); // 20

// we can handle this condition using promises or async / await
let a = 20,
  b = 0;
let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30);
  }, 3000);
});
waitingData.then((data) => {
  b = data;
  console.log(a + b); // 50
});
