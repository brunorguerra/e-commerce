let currentSlider = 0;
let totalSlides = document.querySelectorAll(
  "main #banner .slider .slider-item"
).length;
document.querySelector(
  "main #banner .slider"
).style.width = `calc(100vw * ${totalSlides})`;
let slider = {
  goBack: () => {
    currentSlider--;
    currentSlider < 0 ? (currentSlider = totalSlides - 1) : currentSlider;
    slider.updateMargin();
  },
  goForward: () => {
    currentSlider++;
    currentSlider > totalSlides - 1 ? (currentSlider = 0) : currentSlider;
    slider.updateMargin();
  },
  updateMargin: () => {
    let newMargin = currentSlider * 100;
    document.querySelector(
      "main #banner .slider"
    ).style.marginLeft = `-${newMargin}vw`;
  },
};
setInterval(() => {
  slider.goForward();
}, 7000);
