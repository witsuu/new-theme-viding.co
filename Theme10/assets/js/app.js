$(document).ready(() => {
  // countdown
  const date = $(".countdown").attr("date");
  Countdown(date);

  //autoslider
  $("[id='slider']").infiniteslide({
    speed: 50,
    direction: "up",
  });

  $("#lightSlider").lightSlider({
    item: 1,
    gallery: true,
    thumbItem: 4,
    loop: true,
    controls: true,
  });
});