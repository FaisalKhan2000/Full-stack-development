export default function () {
  console.log("account default function called...");
}
let accountNumber = 1506677;
let accountType = "saving";

function withdraw() {
  console.log("Amount deducted...");
}

function deposit() {
  console.log("Balance updated...");
}

export { withdraw, deposit };
