function isPalindrome(str) {
  const filteredStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = filteredStr.length - 1;

  while (left < right) {
    if (filteredStr[left] !== filteredStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
