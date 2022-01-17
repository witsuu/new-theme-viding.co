document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide(".splide", {
    type: "loop",
    perPage: 3,
    pagination: false,
    gap: '.75rem',
    perMove: 1,
    focus: 'center',
    breakpoints: {
      576: {
        perPage: 1,
      }
    }
  });
  splide.mount();
});

$(document).ready(() => {

  $("#zoom-gallery").magnificPopup({
    delegate: "li a",
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

  $("body").css("overflow-y", "hidden");

  $("#btn-envelope").on("click", function () {
    $("body").css("overflow-y", "auto");

    $(".envelope-wrap").css("transform", "translateY(-100%)");
  });
});