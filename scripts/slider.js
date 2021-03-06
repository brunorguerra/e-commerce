let currentSlider = 0;
let totalSlides = $("main #banner .slider .slider-item").length;
$("main #banner .slider").css("width", `calc(100vw * ${totalSlides})`);
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
    $("main #banner .slider").css("marginLeft", `-${newMargin}vw`);
  },
};
setInterval(() => {
  slider.goForward();
}, 7000);
