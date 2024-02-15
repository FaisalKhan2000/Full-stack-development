// * modules

// global vs non-global modules
// global modules are modules that are not required to import

// e.g of non-global modules
const fs = require("fs");

fs.writeFileSync("hello.txt", "this is my first file created using fs module");
console.log("==>", __dirname);
console.log("==>", __filename);
