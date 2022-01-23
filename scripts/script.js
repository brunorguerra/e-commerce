// Header Scroll Animate
let lastScrollTop = 0;
let header = document.querySelector("header");

let Header = {
  hideAndShowHeader: () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      header.style.top = "-7rem";
    } else {
      header.style.top = "0";
    }
    return (lastScrollTop = scrollTop);
  },
};
window.addEventListener("scroll", Header.hideAndShowHeader);

// Menu de Categorias
let menuCategory = {
  aside: document.querySelector("header .aside-menu"),
  menuButton: document.querySelector("header .aside-button"),
  toggleMenu: function () {
    if (
      menuCategory.aside.classList.contains("asideMenu-active") &&
      menuCategory.menuButton.classList.contains("asideButton-active")
    ) {
      menuCategory.aside.classList.remove("asideMenu-active");
      menuCategory.menuButton.classList.remove("asideButton-active");
    } else {
      menuCategory.aside.classList.add("asideMenu-active");
      menuCategory.menuButton.classList.add("asideButton-active");
    }
  },
  eventButtonClick: () => {
    document
      .querySelector("header .aside-button")
      .addEventListener("click", menuCategory.toggleMenu);
  },
};
menuCategory.eventButtonClick();

// Banner Principal
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
