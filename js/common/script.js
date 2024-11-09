function toggleNavbar() {
  var nav = document.getElementById("nav_bar");
  nav.classList.toggle("show_hide");
}

window.onresize = resizeFn;
resizeFn();

function resizeFn() {
  var nav = document.getElementById("nav_bar");
  if (nav !== null) {
    if (window.innerWidth < 992) {
      nav.classList.add("show_hide");
    } else {
      nav.classList.remove("show_hide");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 992) {
    var nav = document.getElementById("nav_bar");
    if (nav !== null) {
      nav.classList.add("show_hide");
    }
  }
});
