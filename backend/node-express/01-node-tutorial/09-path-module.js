const path = require("path");

// dirname
console.log("Folder name: ", path.dirname(__filename)); // Folder name:  /Users/faisalkhan/Desktop/dev/node/node-express/01-node-tutorial

// filename
console.log("File name: ", path.basename(__filename)); // File name:  09-path-module.js

// Extension
console.log("Extension name: ", path.extname(__filename)); // Extension name:  .js

// parse
console.log("Parse: ", path.parse(__filename));

// Parse:  {
//   root: '/',
//   dir: '/Users/faisalkhan/Desktop/dev/node/node-express/01-node-tutorial',
//   base: '09-path-module.js',
//   ext: '.js',
//   name: '09-path-module'
// }

// Join
console.log("Join: ", path.join(__dirname, "order", "app.js")); // Join:  /Users/faisalkhan/Desktop/dev/node/node-express/01-node-tutorial/order/app.js

// resolve
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);

console.log(path.sep);
