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

  $("body").css("overflow-y", "hidden");

  $("#btn-envelope").on("click", function () {
    $("body").css("overflow-y", "auto");

    $(".envelope-wrap").css("transform", "translateX(-100%)");
  });
});
