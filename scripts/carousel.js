const sliders = document.querySelector(".carouselBox");
let scrollPerClick;
let ImagePadding = 20;

scrollPerClick =
  document.querySelector(".carousel-item").clientWidth + ImagePadding;

let scrollAmount = 0;

function carouselScrollLeft() {
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
  });

  scrollAmount < 0 ? (scrollAmount = 0) : scrollAmount;
}

function carouselScrollRight() {
  if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });
  }
}
