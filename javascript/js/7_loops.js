// 1. while loop

let counter = 1;

// while (counter <= 100) {
//   console.log(counter);
//   counter++;
// }

// adding all even numbers from 1 to 100
let sum = 0;
// while (counter <= 100) {
//   if (counter % 2 === 0) {
//     sum += counter;
//   }
//   counter++;
// }

// console.log(sum); // 2550

// 2. do...while

// do {
//   console.log(counter);
//   counter++;
// } while (counter <= 100);

// 3. for...loop

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// 4. break
//  Terminates the loop immediately.

// for (let i = 0; i < 10; i++) {
//   if (i === 7) {
//     break;
//   }
//   console.log(i);
// }

// 5. continue
// Skips the current iteration and continues to the next iteration.

// for (let j = 0; j < 10; j++) {
//   if (j === 7) {
//     continue;
//   }
//   console.log(j);
// }

// 6. Labeling loops
// Labeling loops in JavaScript allows you to identify and reference them from within nested loops. This can be useful when you have multiple nested loops and you need to break or continue a specific outer loop from within an inner loop.

// Labeling the outer loop
outerLoop: for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 2 && j === 1) {
      break outerLoop; // Breaking out of the outer loop when i is 2 and j is 1
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}
