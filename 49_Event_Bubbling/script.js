// Intermediate Level 🔥

// Event Bubbling and Capturing

// Create multiple nested elements and observe the event bubbling and capturing behavior.

let parent = document.querySelector("div");

let child = document.querySelector("strong");

parent.addEventListener("click", () => {
  console.log("Parent Element Clicked");
});

child.addEventListener("click", () => {
  console.log("Child Element Clicked");
});
