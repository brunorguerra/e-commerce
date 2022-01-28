const sliders = $(".carouselBox");
let scrollPerClick;
let ImagePadding = 20;

scrollPerClick = $(".carousel-item").width() + ImagePadding;

let scrollAmount = 0;

$("#carousel .switchLeft").click(() => {
  sliders.animate(
    {
      scrollLeft: (scrollAmount -= scrollPerClick),
    },
    500
  );
  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
});
$("#carousel .switchRight").click(() => {
  if (scrollAmount <= sliders[0].scrollWidth - sliders.width()) {
    sliders.animate(
      {
        scrollLeft: (scrollAmount += scrollPerClick),
      },
      500
    );
  }
});
