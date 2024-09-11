// Intermediate Level 🔥

// Async Programming / Async Await

// Implement an async function to fetch data from an API and handle errors using try/catch.

async function fetchData(url) {
  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error("Request Failed with Status:" + response.status);
    }
    return await response.json();
  } catch (error) {
    console.error("Error in fetching Data", error);
  }
}

fetchData("https://jsonplaceholder.typicode.com/posts").then((data) =>
  console.log(data)
);
