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
