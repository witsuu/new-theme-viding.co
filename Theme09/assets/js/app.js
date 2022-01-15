AOS.init({
  easing: "ease-out-back",
  duration: 1000,
});

$(document).ready(() => {
  // countdown
  const date = $(".countdown").attr("date");
  Countdown(date);

  $("body").css("overflow-y", "hidden");

  $("#btn-envelope").on("click", function () {
    $("body").css("overflow-y", "auto");

    $(".envelope-wrap").css("transform", "translateY(-100%)");
  });
});
