// Advanced Level 🔥

// Random Exercise

// Create a function that takes in a sentence and returns a running list of consonants per word and vowels per word.

/*
stringCode("Happy Birthday To Me")
--> ["4 6 1 1","1 2 1 1"]

// Consonants - 4 : [H, p, p, y], 6 : [B, r, t, h, d, y], 1 : [T], 1 : [M]

// Vowels - 1 : [a], 2 : [i, a], 1 : [o], 1 : [e]
*/

function stringCode(sentence) {
  function isConsonant(char) {
    const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    return consonants.includes(char);
  }

  function countConsonantAndVowels(word) {
    let consonants = 0;
    let vowels = 0;

    for (const char of word) {
      if (isConsonant(char)) {
        consonants++;
      } else if ("aeiouAEIOU".includes(char)) {
        vowels++;
      }
    }

    return consonants + " " + vowels;
  }

  const words = sentence.split(" ");
  console.log(words)

  const consonantCount = words.map((word) => countConsonantAndVowels(word));

  return consonantCount;
}

console.log(stringCode("Happy Birthday To Me"));
