$(document).ready(function () {
  setTimeout(function () {
    $(".popout-box").css({
      bottom: "0",
    });
  }, 3200);

  $(".popout-cross").on("click", function () {
    $(".popout-box").css({
      bottom: "-999px",
    });
  });
});
