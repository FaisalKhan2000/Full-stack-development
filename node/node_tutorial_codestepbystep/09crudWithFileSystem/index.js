const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;

// CRUD

// 1. Create
// fs.writeFileSync(filePath, "This is a simple text file");

// 2. Read
// fs.readFile(filePath, "utf-8", (error, file) => {
//   console.log(file);
// });

// 3. Update
// fs.appendFile(filePath, " and file name is apple.txt", (error) => {
//   if (!error) console.log("file is updated");
// });

// updating file name
// fs.rename(filePath, `${dirPath}/fruits.txt`, (error) => {
//   if (!error) console.log("file name is updated!!!");
// });

// 4. Delete
// fs.unlinkSync(`${dirPath}/fruits.txt`);
