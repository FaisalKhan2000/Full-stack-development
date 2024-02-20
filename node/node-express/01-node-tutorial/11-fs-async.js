const path = require("path");
const fs = require("fs");

// // Make a directory
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log("Folder created...");
// });

// //  write file
// fs.writeFile(
//   path.join(__dirname, "test", "test.txt"),
//   "hello node\n",
//   (error) => {
//     if (error) {
//       throw error;
//     }

//     fs.appendFile(
//       path.join(__dirname, "test", "test.txt"),
//       "More data",
//       (error) => {
//         if (error) {
//           throw error;
//         }
//         console.log("Data added...");
//       }
//     );
//     console.log("File created...");
//   }
// );

// Read file

// method 1
fs.readFile(
  path.join(__dirname, "test", "test.txt"),
  "UTF-8",
  (error, data) => {
    if (error) {
      throw error;
    }
    console.log(data);
  }
);

// method 2
fs.readFile(path.join(__dirname, "test", "test.txt"), (error, data) => {
  if (error) {
    throw error;
  }
  const content = Buffer.from(data);
  console.log(content.toString());
});

/*


const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')
 */
