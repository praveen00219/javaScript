function arrayIntersection(arr1, arr2) {
  arr1.sort((a, b) => a - b); // Sort the first array
  arr2.sort((a, b) => a - b); // Sort the second array

  const intersection = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      // If elements are equal, add to intersection
      intersection.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++; // Move the pointer of the smaller element
    } else {
      j++;
    }
  }

  return intersection;
}

// Example usage:
console.log(arrayIntersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
