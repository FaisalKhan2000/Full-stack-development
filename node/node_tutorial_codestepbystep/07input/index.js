// console.log(process.argv[3]);

// process .argv has 2 parameters inbhult(1. path of node 2. path of the current dir where file is running)

// console.log(process.argv)
// node index.js
// [
//   '/opt/homebrew/Cellar/node/21.6.1/bin/node',
//   '/Users/faisalkhan/Desktop/dev/node/node_tutorial_codestepbystep/07input/index.js'
// ]

// node index.js hello hi // here we have given 2 arguments
// console.log(process.argv[2]) // hello
// console.log(process.argv[3]) // hi

// * creating a file using process.argv

// const fs = require("fs");

// const input = process.argv;
// fs.writeFileSync(input[2], input[3]); // filename, filecontent

// we will type
// node index.js apple.text "This file is generated using writeFileSync by taking input from process.argv"

// * creating a condition to add and remove file

const fs = require("fs");
const input = process.argv;

if (input[2] === "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] === "remove") {
  fs.unlinkSync(input[3]);
} else {
  console.log("invalid input");
}

// node index.js add fruits.txt "There are  fruits here"
// node index.js remove fruits.txt
// node index.js hello
