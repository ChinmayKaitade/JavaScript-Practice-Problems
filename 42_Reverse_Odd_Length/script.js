// Advanced Level 🔥

// Random Exercise

// Given a string, reverse all the words which have odd length. The even length words are not changed.

// reverseOdd("Apple") --> elppA
// reverseOdd("One Two Four") --> enO owT Four

function reverseOdd(str) {
  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  const words = str.split(" ");
  console.log(words);

  for (let i = 0; i < words.length; i++) {
    if (words[i].length % 2 !== 0) {
      words[i] = reverseString(words[i]);
    }
  }

  return words.join(" ");
}

console.log(reverseOdd("One Two Four"));
