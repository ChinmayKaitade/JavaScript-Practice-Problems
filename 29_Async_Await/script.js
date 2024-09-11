// Intermediate Level 🔥

// Async Programming / Async Await

// Rewrite the previous exercise using async/await.

async function loadImage(src) {
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

async function loadImages() {
  let imageContainer = document.getElementById("imageContainer");

  let imageUrls = [
    "./Images/1.jpg",
    "./Images/2.jpg",
    "./Images/3.jpg",
    "./Images/4.jpg",
  ];

  try {
    const images = await Promise.all(imageUrls.map(loadImage));
    images.forEach((image) => {
      imageContainer.appendChild(image);
    });
  } catch (error) {
    console.error(error);
  }
}

loadImages();
