window.onscroll = function () {
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("stickyBar");
  } else {
    navbar.classList.remove("stickyBar");
  }
};
