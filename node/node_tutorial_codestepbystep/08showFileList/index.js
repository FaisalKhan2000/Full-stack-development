// const fs = require("fs");

// * simplest way of creating a file
// fs.writeFileSync("apple.txt", "there is an apple in our file.");

const { error } = require("console");
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "files");

// creating a file
// for (let i = 0; i < 10; i++) {
//   fs.writeFileSync(`${dirPath}/hello${i}.txt`, `This is the ${i}th file`);
// }
console.log(dirPath);

// reading a filename
fs.readdir(dirPath, (error, files) => {
  files.forEach((file) => {
    console.log("File name is : ", file);
  });
});
