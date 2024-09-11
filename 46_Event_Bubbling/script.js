// Intermediate Level 🔥

// Event Bubbling and Capturing

// Implement a click event on a parent element that triggers different actions based on which child element was clicked.

let myList = document.getElementById("myList");
myList.addEventListener("click", function (event) {
  let clickedElem = event.target;

  if (clickedElem.tagName == "LI") {
    console.log("List Item Clicked", clickedElem.textContent);
  } else {
    console.log("Other Element Clicked");
  }
});
