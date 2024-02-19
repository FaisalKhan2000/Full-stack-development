const os = require("os");

console.log("Os type: ", os.type());

console.log("Os platform: ", os.platform());

console.log("Cpu architecture: ", os.arch());

console.log("Cpu details: ", os.cpus());

console.log("Free memory : ", os.freemem());

console.log("Total memory : ", os.totalmem());

console.log("Uptime : ", os.uptime());

console.log("User Info: ", os.userInfo());

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);
