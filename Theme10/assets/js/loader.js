// document.onreadystatechange = () => {
//   if (document.readyState !== "complete") {
//     document.querySelector(".main-app").style.display = "none";
//     document.querySelector(".loader-wrapper").style.display = "block";
//   } else {
//     document.querySelector(".main-app").style.display = "block";
//     document.querySelector(".loader-wrapper").style.display = "none";
//   }
// };

$(document).on("readystatechange", () => {
  $(document).on("readystatechange", () => {
    if (document.readyState !== "complete") {
      document.querySelector(".main-app").style.display = "none";
      document.querySelector(".loader-wrapper").style.display = "block";
    } else {
      document.querySelector(".main-app").style.display = "block";
      document.querySelector(".loader-wrapper").style.display = "none";
    }
  });
});
