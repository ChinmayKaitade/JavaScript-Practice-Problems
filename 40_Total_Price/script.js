// Advanced Level 🔥

// Random Exercise

// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number.

/*
1 bottle of milk & 1 box of cereals:
getTotalPrice([
    { product:"Milk", quantity:1, price:1.50 },
    { product:"Cereals", quantity: 1, price: 2.50 }
]) --> 4
*/

function getTotalPrice(groceries) {
  let total = 0;

  for (const item of groceries) {
    console.log(item);

    const itemPrice = item.quantity * item.price;

    // total += itemPrice;
    total = total + itemPrice;
  }

  return total;
}

console.log(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Cereals", quantity: 1, price: 2.5 },
  ])
);
