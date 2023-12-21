// * Selecting Elements

// * getElementById --- selecting single elements
let el1 = document.getElementById("first");
// el.innerHTML = 23;
console.log(el1);

// * getElementsByClassName -- selecting multiple elements and create a collection (like an array)
let el2 = document.getElementsByClassName("cl");
console.log(el2); // HTMLCollection(2) [li.cl, li.cl]
// if we use getElementsByClassName, we have to treat them like a an array
for (let i = 0; i < el2.length; i++) {
  el2[i].innerHTML = "<p>hello</p>";
}

// * getElementsByTagName

let el3 = document.getElementsByTagName("h2");
console.log(el3);
console.log(el3.length);
// for (let i = 0; i < el3.length; i++) {
//   el3[i].innerHTML = "hello";
// }
// selecting elements only in a particular elements
let div1 = document.getElementById("div1");
let el4 = div1.getElementsByTagName("h2");
console.log(div1);
console.log(el4);
for (let i = 0; i < el4.length; i++) {
  el4[i].innerHTML = "hello";
}
