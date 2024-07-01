$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $("nav").slideToggle();
  });

  $(window).resize(function () {
    if ($(window).width() > 768) {
      $("nav").show();
    } else {
      $("nav").hide();
    }
  });
});
