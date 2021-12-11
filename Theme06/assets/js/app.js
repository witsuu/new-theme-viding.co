$(document).ready(() => {
  // countdown
  const date = $(".countdown").attr("date");
  Countdown(date);

  //autoslider
  $("#slider").infiniteslide({
    speed: 50,
    direction: "up",
  });
});
