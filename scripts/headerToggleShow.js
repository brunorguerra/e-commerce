let lastScrollTop = 0;
let header = $("header");

$(document).scroll(() => {
  let scrollTop = $(window).scrollTop() || $(document).scrollTop();
  if (scrollTop > lastScrollTop) {
    header.css("top", `-${header.outerHeight()}px`);
  } else {
    header.css("top", "0");
  }
  return (lastScrollTop = scrollTop);
});

$(".scrollTop").click(() => {
  $(document).scrollTop(0);
});
