let currentIndex = 1;
let windowSize = window.innerWidth;
let intervalId;
document.getElementById("totalImages").innerText =
  " / " + document.querySelectorAll(".slider-item").length;
if (windowSize < 743) {
  startSlider();
}

function startSlider() {
  intervalId = setInterval(() => {
    let slideImages = document.querySelectorAll(".slider-item");
    slideImages.forEach((element, i) => {
      element.classList.remove("active");
      if (i === currentIndex) {
        element.classList.add("active");
      }
    });
    document.getElementById("counter").innerText = currentIndex + 1;
    currentIndex = (currentIndex + 1) % slideImages.length;
  }, 3000);
}

window.addEventListener("resize", () => {
  windowSize = window.innerWidth;
  if (windowSize < 743 && !intervalId) {
    startSlider();
  } else if (windowSize >= 743 && intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
});
