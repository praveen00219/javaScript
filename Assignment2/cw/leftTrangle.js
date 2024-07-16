// ------------------left side pattern---------------------------
let rows = 5;
// let count = 1;
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
  // Inner Loop I -> prints num pattern
  for (let j = n; j >= 1; j--) {
    pattern += j + " ";
  }
  pattern += "\n";
}

// outer loop runs for `rows` no. of times
for (let n = rows - 1; n >= 1; n--) {
  // Inner Loop I -> prints num pattern
  for (let j = n; j >= 1; j--) {
    pattern += j + " ";
  }
  pattern += "\n";
}
// print result Pattern
console.log(pattern);
