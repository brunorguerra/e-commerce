// {
//   let element = document.querySelector("main");
//   let header = document.querySelector("header");
//   function animatePage() {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     if (element.offsetTop < scrollTop) {
//       header.style.visibility = "visible";
//       header.style.opacity = "1";
//       header.style.top = "0";
//     } else {
//       header.style.visibility = "hidden";
//       header.style.opacity = "0";
//       header.style.top = "-18rem";
//     }
//   }
//   window.addEventListener("scroll", animatePage);
// }
{
  let aside = document.querySelector("header .aside-menu");
  let menuButton = document.querySelector("header .aside-button");
  function toggleMenu() {
    if (
      aside.classList.contains("asideMenu-active") &&
      menuButton.classList.contains("asideButton-active")
    ) {
      aside.classList.remove("asideMenu-active");
      menuButton.classList.remove("asideButton-active");
    } else {
      aside.classList.add("asideMenu-active");
      menuButton.classList.add("asideButton-active");
    }
  }
  document
    .querySelector("header .aside-button")
    .addEventListener("click", toggleMenu);
}
