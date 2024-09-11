// Intermediate Level 🔥

// Closures

// Implement a private variable using closures.

function createCounter() {
  // private variable --> because of global and functional scoping
  let count = 0;

  // Inner function (closure)
  function increment() {
    count++;
    console.log("Count :", count);
  }

  return {
    incrementCounter: function () {
      increment();
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
counter.incrementCounter(); // 1
counter.incrementCounter(); // 2
console.log(counter);

console.log(counter.getCount()); // 2
