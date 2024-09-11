// Intermediate Level 🔥

// DOM Manipulation - Form Validation

// Implement a form validation function that checks if all required fields are filled out.

function validateForm() {
  let form = document.getElementById("myForm");

  if (form.checkValidity()) {
    alert("Form Successfully Submit!👍");
  } else {
    alert("Please enter required fields!😓");
  }
}

let form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateForm();
});
