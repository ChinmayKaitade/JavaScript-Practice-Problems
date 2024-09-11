// Beginner Level 🔥

// Functions and Scope

// Write a function that calculates that factorial of a given number.

/*
factorial of 0 is 1
factorial of 1 is 1
*/

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact *= i; // fact = fact * i
    }
    return fact;
  }
}

console.log(factorial(5));
