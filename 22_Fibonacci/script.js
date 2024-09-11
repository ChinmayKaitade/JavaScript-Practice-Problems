// Intermediate Level 🔥

// Recursion

// Implement a recursive function to find the nth Fibonacci number.

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(3));

// fibonacci(2) + fibonacci (1)
// fibonacci(2) + 1
// 1+1
