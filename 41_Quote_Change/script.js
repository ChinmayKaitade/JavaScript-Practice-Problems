// Intermediate Level 🔥

// Set Timeout

// Write the JavaScript code to implement the quote-changing feature.

const quotes = [
  "First Quote Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla quisquam et saepe rerum debitis nemo, maxime non.",
  "Second Quote Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Third Quote Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque distinctio totam ab obcaecati?",
  "Fourth Quote Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Fifth Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, nobis aut?",
];

function displayRandomQuotes() {
  const quoteDisplay = document.getElementById("quoteDisplay");

  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
}

displayRandomQuotes();

function changeQuotePeriodically() {
  displayRandomQuotes();
  setTimeout(changeQuotePeriodically, 10000);
}

changeQuotePeriodically();
