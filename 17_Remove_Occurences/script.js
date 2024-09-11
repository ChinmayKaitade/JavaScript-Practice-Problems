// Beginner Level 🔥

// Array Methods

// Remove all occurrences of a specific element from an array.

function removeElem(arr, target) {
  return arr.filter((item) => item !== target);
}

let arr = [10, 20, 20, 18, 20, 13, 12, 15];

let target = 20;

let result = removeElem(arr, target);
console.log(result); // [ 10, 18, 13, 12, 15 ]
