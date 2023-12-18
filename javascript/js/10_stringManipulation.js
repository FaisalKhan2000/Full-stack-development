// String manipulation involves a range of operations performed on strings in JavaScript, enabling modification, extraction, concatenation, transformation, and more. Here's an in-depth look at various string manipulation methods:

// * Concatenation:
// Using + Operator: Strings can be concatenated using the + operator.
let str1 = "Hello, ";
let str2 = "world!";
let result = str1 + str2; // Output: "Hello, world!"
console.log(result);

// * concat() Method: This method joins strings together.
let str3 = "Hello, ";
let str4 = "world!";
let combined = str3.concat(str4); // Output: "Hello, world!"
console.log(combined);

// * Substring Extraction:
// substring() Method: Extracts a portion of a string between two indices.
let text = "JavaScript";
console.log(text.substring(0, 4)); // Output: "Java"
console.log(text);

// * slice() Method: Similar to substring(), extracts part of a string based on start and end positions.
let text1 = "JavaScript";
console.log(text1.slice(4)); // Output: "Script"
console.log(text1.slice(0, 4)); // Output: "Java"

// * Changing Case:
// toUpperCase() and toLowerCase(): Convert strings to uppercase or lowercase.
let message = "Hello, World!";
console.log(message.toUpperCase()); // Output: "HELLO, WORLD!"
console.log(message.toLowerCase()); // Output: "hello, world!"

// * Replacing Substrings:
// replace() Method: Replaces a specified substring with another string.
let sentence = "I like apples.";
let newSentence = sentence.replace("apples", "oranges");
console.log(newSentence); // Output: "I like oranges."

// * Length and Access:
// length Property: Returns the length of a string.
let word = "Hello";
console.log(word.length); // Output: 5

// * Accessing Characters: Individual characters can be accessed using bracket notation or charAt() method.
let word1 = "Hello";
console.log(word1[0]); // Output: "H"
console.log(word1.charAt(1)); // Output: "e"

// * The substr() method in JavaScript is used to extract a portion of a string, starting from a specified index and continuing for a specified number of characters.
// str.substr(startIndex, length)
// startIndex: The index at which to begin extraction. If negative, it counts from the end of the string.
// length (optional): The number of characters to extract. If omitted, it extracts to the end of the string.

let text3 = "JavaScript";

console.log(text3.substr(4)); // Output: "Script" (Starts from index 4 to the end)
console.log(text3.substr(0, 4)); // Output: "Java" (Starts from index 0, extracts 4 characters)
console.log(text3.substr(-3)); // Output: "ipt" (Starts from the third character from the end)
console.log(text3.substr(4, 3)); // Output: "Scr" (Starts from inde

// * indexOf()

let text4 = "JavaScript is amazing. JavaScript is powerful.";

console.log(text4.indexOf("JavaScript")); // Output: 0 (Index of the first occurrence)
console.log(text4.indexOf("is")); // Output: 11 (Index of the first occurrence of "is")
console.log(text4.indexOf("Python")); // Output: -1 (Value not found, returns -1)

// * lastIndexOf()
let text5 = "JavaScript is amazing. JavaScript is powerful.";

console.log(text5.lastIndexOf("JavaScript")); // Output: 26 (Index of the last occurrence)
console.log(text5.lastIndexOf("is")); // Output: 38 (Index of the last occurrence of "is")
console.log(text5.lastIndexOf("Python")); // Output: -1 (Value not found, returns -1)

// * trim()
let text6 = "   Hello, World!   ";
let trimmedText = text6.trim();
console.log(trimmedText); // Output: "Hello, World!"

// * trimStart(), trimEnd()

console.log(text6.trimStart()); // Output: "Hello, World!   "
console.log(text6.trimEnd()); // Output: "   Hello, World!"

// * includes()
let text7 = "JavaScript is amazing.";

console.log(text7.includes("Script")); // Output: true
console.log(text7.includes("python")); // Output: false (case-sensitive)
console.log(text7.includes("is")); // Output: true
