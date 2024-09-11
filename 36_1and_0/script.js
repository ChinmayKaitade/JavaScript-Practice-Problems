// Advanced Level 🔥

// Random Exercise

// Create a function that takes a string as an argument. The function must return a string containing 1 and 0s based on the string argument's words. If any word in the argument is not equal to "zero" or "one" (case insensitive), you should ignore it. The returned string's length should be a multiple of 8, if the string is not a multiple of 8 you should remove the numbers in excess.

/*
textToNumberBinary("Zero one Zero ONE zero one zero one") --> "01010101"
textToNumberBinary("zero one zero one zero one zero one one two") --> ""
textToNumberBinary("zero one zero one zero one zero three") --> ""
*/

function textToNumberBinary(str) {
  const words = str
    .split(" ")
    .filter(
      (word) => word.toLowerCase() === "zero" || word.toLowerCase() === "one"
    );

  console.log(words);

  let binaryString = words
    .map((word) => {
      return word.toLowerCase() === "one" ? "1" : "0";
    })
    .join("");

  const excessLength = binaryString.length % 8;

  if (excessLength !== 0) {
    binaryString = binaryString.slice(0, 0);
  }
  return binaryString;

  console.log(binaryString);
}

console.log(textToNumberBinary("Zero one Zero ONE zero one zero one"));
