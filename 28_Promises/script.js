// Intermediate Level 🔥

// Async Programming Promises

// Use Promises to load multiple images asynchronously and display them on a webpage.

function loadImage(src) {
  return new Promise((resolve, reject) => {
    let img = new Image(500, 500);
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error("Failed to load Image" + src));
    };
    img.src = src;
  });
}

let imageContainer = document.getElementById("imageContainer");

let imageUrls = [
  "./Images/1.jpg",
  "./Images/2.jpg",
  "./Images/3.jpg",
  "./Images/4.jpg",
];

Promise.all(imageUrls.map(loadImage)).then((image) => {
  image
    .forEach((image) => {
      imageContainer.appendChild(image);
    })
    .catch((err) => {
      console.log(err);
    });
});
