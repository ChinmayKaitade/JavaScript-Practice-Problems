// Beginner Level 🔥

// Array Methods

// Find the largest element in an array using the `reduce()` method.

function largestElement(arr) {
  return arr.reduce((max, curr) => (curr > max ? curr : max));
}

let arr = [22, 15, 72, 32, 54];

let result = largestElement(arr);
console.log(result);
