let lastScrollTop = 0;
let header = document.querySelector("header");

let Header = {
  hideAndShowHeader: () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      header.style.top = `-${header.clientHeight}px`;
    } else {
      header.style.top = "0";
    }
    return (lastScrollTop = scrollTop);
  },
};
window.addEventListener("scroll", Header.hideAndShowHeader);

function ScrollTop() {
  document.documentElement.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
