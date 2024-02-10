$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $(".nav-bar").toggleClass("nav-toggle");
  });
});
  // if ($(window).scrollTop() > 30) {
  //   $(".header").css({
  //     background: " rgb(43, 151, 152) 19%",
  //     "box-shadow": " 0 .3.7rem 0 .5rem rgba(0,0,0,.4)",
  //   });
  // } else {
  //   $(".header").css({
  //     background: "none",
  //     "box-shadow": "none",
  //   });
  // }
