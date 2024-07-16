// -------------------------Right side pattern ---------------------
let rows = 5;
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
  // Inner Loop I -> prints spaces
  for (let space = 1; space <= rows - n; space++) {
    pattern += "  ";
  }

  //   Inner Loop II -> prints num pattern
  for (let j = 1; j <= n; j++) {
    pattern += j + " ";
  }
  pattern += "\n";
}

// outer loop runs for `rows` no. of times
for (let n = rows - 1; n >= 1; n--) {
  // Inner Loop I -> prints spaces
  for (let space = 1; space <= rows - n; space++) {
    pattern += "  ";
  }

  //   Inner Loop II -> prints num pattern
  for (let j = 1; j <= n; j++) {
    pattern += j + " ";
  }
  pattern += "\n";
}
// print result Pattern
console.log(pattern);
