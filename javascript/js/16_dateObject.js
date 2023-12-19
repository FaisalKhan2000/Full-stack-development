// * Date() in js

// new Date()
// new Date(value)
// new Date(dateString)
// new Date(dateObject)

// new Date(year, monthIndex)
// new Date(year, monthIndex, day)
// new Date(year, monthIndex, day, hours)
// new Date(year, monthIndex, day, hours, minutes)
// new Date(year, monthIndex, day, hours, minutes, seconds)
// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

// * creating a date object

let currentDate = new Date(2023, 0, 11, 10, 5, 33, 23); // In Date() object month starts with 0
// let x = new Date("January 11, 2023 10:23:33"); // In Date() object month starts with 0
console.log(currentDate);

// * Methods in Date() object

// * get Methods: getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes(), getSeconds()
// Retrieve individual components of a date.

console.log(currentDate.getTime()); // getTime() will give output in milliseconds like how much time it has been from 1 jan 1970
console.log(currentDate.getFullYear()); // Output: Current year
console.log(currentDate.getMonth()); // Output: Current month (0-11)
console.log(currentDate.getDate()); // Output: Current day of the month (1-31)
console.log(currentDate.getDay()); // Output: Current day of the week (0-6, Sunday-Saturday)
console.log(currentDate.getHours()); // Output: Current hour (0-23)
console.log(currentDate.getMinutes()); // Output: Current minute (0-59)
console.log(currentDate.getSeconds()); // Output: Current second (0-59)

// * set Methods: setFullYear(), setMonth(), setDate(), setHours(), setMinutes(), setSeconds()

currentDate.setFullYear(2022);
currentDate.setMonth(1);
currentDate.setDate(10);
currentDate.setHours(12);
currentDate.setMinutes(10);
currentDate.setSeconds(1);
currentDate.setMilliseconds(10);
console.log(currentDate);

// which date comes after 50 days
currentDate.setDate(currentDate.getDate() + 50);
console.log(currentDate);

// adding 1 minutes
currentDate.setMinutes(currentDate.getMinutes() + 1);
console.log(currentDate);
