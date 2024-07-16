// ------------------ reverse trangle pattern---------------------------
let rows = 5;

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop runs for `rows` no. of times
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
// print result Pattern
console.log(pattern);
