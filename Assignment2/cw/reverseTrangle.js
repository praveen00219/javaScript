// ------------------reverse trangle pattern---------------------------

// user can take input from terminal
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number of rows: ", (rows) => {
  rows = parseInt(rows, 10);

  // Pattern variable carries the final pattern in string format
  let pattern = "";

  // Outer loop runs for `rows` number of times in reverse order
  for (let n = rows; n >= 1; n--) {
    // Inner Loop I -> prints spaces
    for (let space = 1; space <= rows - n; space++) {
      pattern += "  ";
    }

    // Inner Loop II -> prints num pattern
    for (let num = 1; num <= 2 * n - 1; num++) {
      pattern += num + " ";
    }
    pattern += "\n";
  }

  // Print result pattern
  console.log(pattern);

  rl.close();
});
