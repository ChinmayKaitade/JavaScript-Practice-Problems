// Advanced Level 🔥

// Random Exercise

// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all its digit is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

// oddOrEven(121) = 1 + 2 + 1 = 4 --> Evenish
// oddOrEven(41) = 4 + 1 = 5 --> Oddish

function oddishOrEvenish(num) {
  const digits = num.toString().split("").map(Number);

  const sum = digits.reduce((acc, digit) => {
    acc + digit, 0;
  });

  return sum % 2 === 0 ? "Evenish" : "Oddish";
}

console.log(oddishOrEvenish(41));
