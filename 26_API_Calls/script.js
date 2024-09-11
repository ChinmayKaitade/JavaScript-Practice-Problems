// Intermediate Level 🔥

// Async Programming Callbacks

// 1. Implement a function that makes multiple API calls and processes the data using callbacks.

async function makeAPIcall(url, cb) {
  await fetch(url)
    .then((response) => response.json(""))
    .then((data) => cb(data))
    .catch((error) => console.error("Error during API call", error.message));
}

function handleData(data) {
  console.log("Processed Data:", data);
}

function main() {
  const apiUrl1 = "https://jsonplaceholder.typicode.com/posts/1";
  const apiUrl2 = "https://jsonplaceholder.typicode.com/posts/2";

  makeAPIcall(apiUrl1, handleData);
  makeAPIcall(apiUrl2, handleData);
}

main();
