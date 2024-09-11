// Beginner Level 🔥

// Higher-Order Functions

// Write a function that takes an array of numbers and return a new array with only the even numbers.

let arr = [10, 20, 30, 32, 35, 40, 17];

function filteredArray(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log(filteredArray(arr));
console.log("Original Array", arr);
