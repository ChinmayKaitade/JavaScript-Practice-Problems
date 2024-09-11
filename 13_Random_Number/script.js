// Beginner Level 🔥

// Functions and Scope

// Create a function that generates a random number between a given range.

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(50, 100));
