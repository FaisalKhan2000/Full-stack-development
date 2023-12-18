// In JavaScript, alert, confirm, and prompt are methods that interact with users through dialog boxes in a web browser.

// alert():
// Displays a message in a dialog box and waits for the user to click "OK".

// alert("This is an alert message!");

// confirm():
// Displays a message in a dialog box with "OK" and "Cancel" buttons. It returns a boolean value (true if "OK" is clicked, false if "Cancel" is clicked).

// let result = confirm("Do you want to proceed?");
// if (result) {
//   console.log("User clicked OK");
// } else {
//   console.log("User clicked Cancel");
// }

// prompt():
// Displays a dialog box that prompts the user for input. It returns the text entered by the user as a string. It can also have a default value.

let name = prompt("Enter your name:", "John Doe");
if (name != null) {
  console.log(`Hello, ${name}!`);
} else {
  console.log("User cancelled the prompt.");
}
