// window.addEventListener("scroll", () => {
//   console.log(
//     "On each upscroll or downscroll, this event will trigger and update the scrolling"
//   );
//   console.log(window.scrollY); //display the in pixel of how much we scrolled down and also get auto decrese if we reached back to top psotion of page.

// });

window.addEventListener("scroll", function () {
  // console.log(window.scrollY); //prints the scolls in pixel.
  if (window.scrollY >= 319) {
    document.querySelector(".navbar").classList.add("sticky");
  } else {
    document.querySelector(".navbar").classList.remove("sticky");
  }
});
