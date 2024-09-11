// Intermediate Level 🔥

// Prototypes

// Create a prototype for a Product object with properties like name, price, and quality. Add a method to the Product prototype to calculate the total value.

function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

Product.prototype.calculateTotalValue = function () {
  return this.price * this.quantity;
};

const product1 = new Product("widget", 10, 5);
// console.log(product1.calculateTotalValue()); // 50
const totalPrice = product1.calculateTotalValue();
console.log(`Total Price of ${product1.name} is ${totalPrice}`); // Total Price of widget is 50

console.log(Product.prototype); // {}

console.log(product1); // Product { name: 'widget', price: 10, quantity: 5 }

/****************************************/

const product2 = new Product("Pen", 60, 2);
// console.log(product2.calculateTotalValue()); // 120
const totalPrice2 = product2.calculateTotalValue();
console.log(`Total Price of ${product2.name} is ${totalPrice2}`); // Total Price of Pen is 120
