$(document).ready(() => {
  // countdown
  const date = $(".countdown").attr("date");
  Countdown(date);

  //autoslider
  $("[id='slider']").infiniteslide({
    speed: 50,
    direction: "up",
  });

  $("body").css("overflow-y", "hidden");

  $("#btn-envelope").on("click", function () {
    $("body").css("overflow-y", "auto");

    $(".envelope-wrap").css("transform", "translateY(-100%)");
  });
});
