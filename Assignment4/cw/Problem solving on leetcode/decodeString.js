function decodeString(s) {
  let numStack = [];
  let strStack = [];
  let currentNum = 0;
  let currentStr = "";

  for (let char of s) {
    if (!isNaN(char)) {
      // If the character is a digit
      currentNum = currentNum * 10 + parseInt(char); // Build the number
    } else if (char === "[") {
      // Push the current number and string onto their respective stacks
      numStack.push(currentNum);
      strStack.push(currentStr);
      // Reset the current number and string
      currentNum = 0;
      currentStr = "";
    } else if (char === "]") {
      // Pop the number and string from their respective stacks
      let repeatTimes = numStack.pop();
      let previousStr = strStack.pop();
      // Repeat the current string repeatTimes times and append to the previous string
      currentStr = previousStr + currentStr.repeat(repeatTimes);
    } else {
      // Append the character to the current string
      currentStr += char;
    }
  }
  return currentStr;
}
// Example usage:
console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("2[abc]3[cd]ef"));
