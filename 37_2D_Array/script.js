// Advanced Level 🔥

// Multidimensional Array

// Create a JavaScript function that generates a 2D array with the specified number of rows and columns. Each element in the array should contain the sum of its row index and column index. Once you've created the array, write two additional functions to display the array in its original form and in reverse.

function createMultiDimensionalArray(rows, columns) {
  let arr = [];

  for (let i = 0; i < rows; i++) {
    let row = [];

    for (let j = 0; j < columns; j++) {
      row.push(i + j);
    }
    arr.push(row);
  }

  return arr;
}

function display(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].join(" "));
  }
}

function reverseDisplay(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i].reverse().join(" "));
  }
}

const rows = 3;
const columns = 4;

const multiArray = createMultiDimensionalArray(rows, columns);

console.log("Original Array");

display(multiArray);

console.log("Reversed Array");

reverseDisplay(multiArray);
