// ---------- How to take input from Terminal in js--------------
function sum(num1, num2) {
  return num1 + num2;
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num1, num2;

readline.question("Give a number : ", function abc(num) {
  num1 = parseInt(num); // Ensure num1 is a number  (This is example of Type Conversion)
  readline.question("Give another number : ", (num) => {
    num2 = parseInt(num); // Ensure num2 is a number (Type Conversion:)
    readline.close();
    console.log(`The sum is: ${sum(num1, num2)}`); // string literal
    console.log("The sum is: " + sum(num1, num2)); // string concatenation
  });
});
