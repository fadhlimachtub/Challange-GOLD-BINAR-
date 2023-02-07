const width = document.querySelectorAll('#slider .content')[0].offsetWidth + 32;

const buttonLeft = document.getElementById("btnLeft");
const buttonRight = document.getElementById("btnRight");

buttonLeft.addEventListener("click", () => {
  document.getElementById("slider").scrollLeft -= width;
});

buttonRight.addEventListener("click", () => {
  document.getElementById("slider").scrollLeft += width;
});
