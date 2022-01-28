// Menu de Categorias
let aside = $("header .aside-menu");
let menuButton = $("header .aside-button");

$("header .aside-button").click(function () {
  if (
    aside.hasClass("asideMenu-active") &&
    menuButton.hasClass("asideButton-active")
  ) {
    aside.removeClass("asideMenu-active");
    menuButton.removeClass("asideButton-active");
  } else {
    aside.addClass("asideMenu-active");
    menuButton.addClass("asideButton-active");
  }
});
