$(document).ready(() => {
  //autoslider
  $("[id='slider']").infiniteslide({
    speed: 50,
    direction: "up",
  });

  // $("#lightSlider").lightSlider({
  //   item: 1,
  //   gallery: true,
  //   thumbItem: 4,
  //   loop: true,
  //   controls: true,
  // });

  $(".gallery").magnificPopup({
    delegate: "a",
    type: "image",
    mainClass: "mfp-with-zoom",
    zoom: {
      enabled: true,
      easing: "ease-in-out",
    },
  });
});
