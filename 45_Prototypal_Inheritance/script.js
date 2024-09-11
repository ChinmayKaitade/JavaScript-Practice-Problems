// Advanced Level 🔥

// Prototypal Inheritance

// Create an Object `person` with properties like name and age. Then, create a new object `student` that inherits from `person` and has an additional property `studentId`. Add a method to the `person` object and demonstrates that `student` also has access to it.

const person = {
  name: "John",
  age: 20,

  introduce: function () {
    return `My name is ${this.name} and I'm ${this.age} years old.`;
  },
};

const student = Object.create(person);
student.studentId = "12345";

console.log(student.name);
console.log(student.studentId);

console.log(person);

console.log(student.introduce());
