$(document).ready(function () {
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $("header nav").addClass("fixed-top");
      $("header nav").addClass("white-background");
    } else {
      $("header nav").removeClass("fixed-top");
      $("header nav").removeClass("white-background");
    }
  });
});
