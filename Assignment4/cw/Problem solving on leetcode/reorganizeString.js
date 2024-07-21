function reorganizeString(s) {
  const charCount = {};

  // Count the frequency of each character
  for (const char of s) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Create an array of [char, frequency] and sort by frequency in descending order
  const sortedChars = Object.keys(charCount).map((char) => [
    char,
    charCount[char],
  ]);
  sortedChars.sort((a, b) => b[1] - a[1]);

  // If the most frequent character's count is more than half the length of the string plus one, return ''
  if (sortedChars[0][1] > Math.ceil(s.length / 2)) {
    return "";
  }

  const result = new Array(s.length);
  let index = 0;
  // Place the most frequent characters first in even indices
  for (const [char, count] of sortedChars) {
    for (let i = 0; i < count; i++) {
      if (index >= s.length) {
        index = 1; // Start filling from odd indices
      }
      result[index] = char;
      index += 2;
    }
  }
  return result.join("");
}
// Example usage:
console.log(reorganizeString("aab")); // Output: "aba"
console.log(reorganizeString("aaab")); // Output: ""
