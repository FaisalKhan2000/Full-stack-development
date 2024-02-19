const Emitter = require("events"); // Importing EventEmitter class

// const myEmitter = new Emitter();
// // Example 1:
// myEmitter.on("somename", (data) => {
//   console.log(data);
// }); // Listener listening for event

// myEmitter.emit("somename", {
//   name: "faisal",
// });

class Auth extends Emitter {
  register(username) {
    console.log("Registered successfully...");
    this.emit("registered", username); // Emitting "registered" event
  }
}

const auth = new Auth(); // Creating an instance of Auth

// Listening for "registered" event
auth.on("registered", (data) => {
  console.log(`Sending email to ${data}`); // Sending email
});

// Listening for "registered" event
auth.on("registered", (data) => {
  console.log(`Sending welcome email to ${data}`); // Sending welcome email
});

auth.register("faisal khan"); // Calling register method
/*

// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
  console.log('some other logic here')
})

customEmitter.emit('response', 'john', 34)

*/
