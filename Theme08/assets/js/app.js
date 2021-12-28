$(document).ready(() => {
  $(".zoom-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    mainClass: "mfp-with-zoom mfp-img-mobile",
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      easing: "ease-in-out",
    },
  });
  // countdown
  const date = $(".countdown").attr("date");
  Countdown(date);

  //autoslider
  $("[id='slider']").infiniteslide({
    speed: 50,
    direction: "up",
  });
});
