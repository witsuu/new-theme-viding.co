AOS.init({
  easing: "ease-out-back",
  duration: 1000,
});

$(document).ready(() => {
  // countdown
  const date = $(".countdown").attr("date");
  Countdown(date);

  //autoslider
  $("[id='slider']").infiniteslide({
    speed: 50,
    direction: "up",
  });

  const owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    dots: false,
  });

  $(".next").on("click", () => {
    owl.trigger("next.owl.carousel");
  });
  $(".prev").on("click", () => {
    owl.trigger("prev.owl.carousel");
  });
});
