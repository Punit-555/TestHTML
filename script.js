window.addEventListener("load", updateHeaderNavHeight);
window.addEventListener("resize", updateHeaderNavHeight);

var headerNavElement = document.querySelector("body > header > nav");
var headerNavStyleElement = document.createElement("style");
document.head.appendChild(headerNavStyleElement);

function updateHeaderNavHeight() {
  var h = headerNavElement.offsetHeight;

  headerNavStyleElement.innerText =
    "header::before { height:" +
    h +
    "px }" +
    "header { margin-bottom:" +
    -h +
    "px }" +
    "#main-content { padding-top:" +
    h +
    "px }";
}

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navList = document.querySelector("nav ul");

  menuIcon.addEventListener("click", function () {
    navList.classList.toggle("active");
    // Toggle menu icon between hamburger and cross
    if (navList.classList.contains("active")) {
      menuIcon.innerHTML = "&#10005;"; // Change to cross icon when menu is open
    } else {
      menuIcon.innerHTML = "&#9776;"; // Change to hamburger icon when menu is closed
    }
  });
});
