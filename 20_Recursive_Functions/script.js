// Intermediate Level 🔥

// Recursion

// Write a recursive function to calculate the factorial of a given number.

function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // 120

// Here we found, maximum call stack size exceeded because in initial stage their will be no barrier where the loop will end it goes infinite i.e from given number to minus infinity, so we put condition there that if the number is equals to 1 then directly return 1 other go in else part.

// Factorial of 5 ✔️
// n * factorial(n-1)

// 5 * factorial(5-1)
// 4 * factorial(4-1)
// 3 * factorial(3-1)
// 2 * factorial(2-1)
// 1 --> if block statement executes and returns `1`
