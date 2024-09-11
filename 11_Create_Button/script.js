// Beginner Level 🔥

// Basic DOM Manipulation

// Create a button dynamically and add it to the webpage with button styling.

let container = document.getElementById("container");

let addButton = document.createElement("button");

addButton.className = "btn";
addButton.textContent = "Click Here";
addButton.style.backgroundColor = "orange";
addButton.style.color = "#f1f1f1";
addButton.style.padding = "4px 7px";
addButton.style.border = "none";
addButton.style.borderRadius = "4px";
addButton.style.margin = "15px";

container.appendChild(addButton);
