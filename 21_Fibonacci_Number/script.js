// Intermediate Level 🔥

// Recursion

// Implement a recursive function to find the nth Fibonacci number.

// 💡 Fibonacci Number --> In Fibonacci Series the next number is sum of its two previous consecutive numbers
// i.e, 0 1 2 3 5 8 13.....n

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

let result = fibonacci(5);
let result1 = fibonacci(7);

console.log(result); // 5
console.log(result1); // 13
