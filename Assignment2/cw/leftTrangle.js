// ------------------left side pattern---------------------------

// user can take input from terminal
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number of rows: ", (answer) => {
  let rows = parseInt(answer);
  let pattern = "";

  // First part: upper half of the pattern
  for (let n = 1; n <= rows; n++) {
    for (let j = n; j >= 1; j--) {
      pattern += j + " ";
    }
    pattern += "\n";
  }

  // Second part: lower half of the pattern
  for (let n = rows - 1; n >= 1; n--) {
    for (let j = n; j >= 1; j--) {
      pattern += j + " ";
    }
    pattern += "\n";
  }

  // Print the result pattern
  console.log(pattern);

  rl.close();
});
