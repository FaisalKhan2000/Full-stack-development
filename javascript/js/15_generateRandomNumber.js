// Generating random number between 0 to 10

let x = Math.floor(Math.random() * 10) + 1;
// Math.random() will give numbers between 0 and 1 e.g. 0.322134
// multiplying the number 0.322134 will give 3.22134
// Math.floor() will convert the number to floor value e.g. 3.22134 will convert to 3
// so we can see that we will get the number between 0 to 9
// but we need number between 1 to 10, so we will add 1

console.log(x);

// Generating random number between min and max number
// this formula is taken from internet

function getRandom(min, max) {
  //   let x = Math.floor(Math.random() * (max - min)) + min;
  //   In this we are getting the number between min and one less than max (i.e. max number is not coming)
  //   we will add 1 to include the max number
  let x = Math.floor(Math.random() * (max - min + 1)) + min;

  return x;
}

console.log(getRandom(15, 25));
