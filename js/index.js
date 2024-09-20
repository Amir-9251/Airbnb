let currentIndex = 0;
let images = document.querySelectorAll(".slider-item");
let totalSlides = images.length;
let counter = document.getElementById("imageCounter");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

const updateSlider = () => {
  let screenWidth = window.innerWidth;
  let visibleImages = screenWidth > 743 ? 5 : 1;

  images.forEach(
    (img, i) =>
      (img.style.display =
        i >= currentIndex && i < currentIndex + visibleImages
          ? "block"
          : "none")
  );
  console.log(currentIndex);
  counter.textContent = `${currentIndex + 1} / ${totalSlides}`;
  prev.style.pointerEvents = currentIndex === 0 ? "none" : "auto";
  next.style.pointerEvents =
    currentIndex + visibleImages >= totalSlides ? "none" : "auto";
};

prev.addEventListener("click", () => (currentIndex--, updateSlider()));
next.addEventListener("click", () => (currentIndex++, updateSlider()));
window.addEventListener("resize", updateSlider);
updateSlider();
