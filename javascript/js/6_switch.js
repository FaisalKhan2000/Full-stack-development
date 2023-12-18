// if input = 1, "y", "yes" output = continue
// if inout = 0, "n", "no" output = end

let input;
input = "n";

// if (input === 1) {
//   console.log("continue");
// } else if (input === "y") {
//   console.log("continue");
// } else if (input === "yes") {
//   console.log("continue");
// } else if (input === 0) {
//   console.log("end");
// } else if (input === "n") {
//   console.log("end");
// } else if (input === "no") {
//   console.log("end");
// }

switch (input) {
  case 1:
  case "y":
  case "yes":
    console.log("continue");
    break;
  case 2:
  case "n":
  case "no":
    console.log("end");
    break;

  default:
    console.log("Wrong Input");
    break;
}
