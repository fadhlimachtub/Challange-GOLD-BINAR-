const width = screen.width;

const buttonLeft = document.getElementById("btnLeft");
const buttonRight = document.getElementById("btnRight");

buttonLeft.addEventListener("click", function () {
  document.getElementById("slider").scrollLeft -= width;
});

buttonRight.addEventListener("click", function () {
  document.getElementById("slider").scrollLeft += width;
});
