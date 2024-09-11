// Intermediate Level 🔥

// Async Programming Promises

// Rewrite the previous exercise using Promises.

function makeAPIcall(url) {
  return fetch(url).then((response) => response.json(""));
}

function handleData(data) {
  console.log("Processed Data:", data);
}

function main() {
  const apiUrl1 = "https://jsonplaceholder.typicode.com/posts/1";
  const apiUrl2 = "https://jsonplaceholder.typicode.com/posts/2";

  makeAPIcall(apiUrl1)
    .then(handleData)
    .catch((error) => console.log(`error`));
  makeAPIcall(apiUrl2)
    .then(handleData)
    .catch((error) => console.log(`error`));
}

main();
