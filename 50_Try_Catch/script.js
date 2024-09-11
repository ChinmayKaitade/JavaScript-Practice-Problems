// Intermediate Level 🔥

// DOM Manipulation - Creating Elements

// Create an image gallery using dynamically generated elements.

function createImageElem(src) {
  let img = document.createElement("img");

  img.src = src;

  return img;
}

let gallery = document.getElementById("gallery");

let imageUrls = [
  "./Images/1.jpg",
  "./Images/2.jpg",
  "./Images/3.jpg",
  "./Images/4.jpg",
];

imageUrls.forEach((url) => gallery.appendChild(createImageElem(url)));

createImageElem();
