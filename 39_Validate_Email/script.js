// Advanced Level 🔥

// Regular Expressions

// Write a regular expression to validate an email address.

const emailRegex = /^[a-zA-Z._%+-]+@[a-zA-Z0-9-.]+\.[a-zA-Z]{2,}$/;

function validateEmail(email) {
  return emailRegex.test(email);
}

const email = "john@gmail.com";
console.log(validateEmail(email));
