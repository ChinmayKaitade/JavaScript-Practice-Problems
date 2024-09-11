// Beginner Level 🔥

// Objects

// Create an Object representing a car with properties like name, model, and year. Add a method to the car object to start the engine.

let Obj = [
  {
    name: "Toyota",
    model: "Camry",
    year: "2022",
  },
  {
    name: "Suzuki",
    model: "Swift",
    year: "2018",
  },
  {
    name: "Renault",
    model: "Duster",
    year: "2019",
  },
  {
    name: "Suzuki",
    model: "Alto",
    year: "2016",
  },
];

console.log(Obj);

Obj.startEngine = () => {
  console.log("Engine Started");
};

Obj.startEngine();
