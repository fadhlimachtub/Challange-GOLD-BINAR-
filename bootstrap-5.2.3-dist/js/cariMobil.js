function transBackground(event) {
  const element = event.target;
  const transparan = document.getElementById("trans");
  if (element.tagName == "form".toUpperCase()) {
    transparan.classList.add("trans");
  } else if (element.tagName == "input".toUpperCase()) {
    transparan.classList.add("trans");
  } else if (element.tagName == "select".toUpperCase()) {
    transparan.classList.add("trans");
  } else {
    transparan.classList.remove("trans");
  }

  console.log(transparan.classList);
}
