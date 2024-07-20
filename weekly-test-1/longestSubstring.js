function lengthOfLongestSubstring(s) {
  const lastIndex = {}; // Store the last index of each character
  let left = 0,
    maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    if (lastIndex[s[right]] !== undefined && lastIndex[s[right]] >= left) {
      left = lastIndex[s[right]] + 1;
    }
    lastIndex[s[right]] = right;
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
