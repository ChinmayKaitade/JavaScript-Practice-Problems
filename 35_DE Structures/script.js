// Advanced Level 🔥

// Destructuring

// Destructure an object to get its properties.

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  city: "New York",
};

console.log(person);

const { firstName, lastName, ...age } = person;
console.log(firstName);
console.log(lastName);
console.log(age);
