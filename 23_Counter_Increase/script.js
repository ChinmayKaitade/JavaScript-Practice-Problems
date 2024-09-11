// Intermediate Level 🔥

// Closures

// Create a counter function using Closures that increments and return the count on each call.

function createCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

let counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 4
console.log(counter()); // 5
