// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// Nodejs wrapps module code within an IIFE , which ensures that the varibles exports, require, module, ... are scoped locally within the function,preventing accidental global namespace pollution and allowing for encapsulation of module-level variables and functions.

(function (exports, require, module, __filename, __dirname) {
  // Module code here
  module.exports = {
    greet: function (name) {
      console.log(`Hello, ${name}!`);
    },
  };
})(exports, require, module, __filename, __dirname);

// 1. NPM Module
const color = require("cli-color");
console.log(color.red("Hello Node.js"));

// 2. Local Module
const names = require("./04-names");
const sayHi = require("./05-utils");
const data = require("./06-alternative-flavor");
require("./07-mind-grenade");
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

// core modules
// os, path, http, fs
