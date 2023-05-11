let menuicons = document.getElementById("navbaricon");
menuicons.addEventListener("click", function () {
  document.getElementById("navbar").style.transition = "0.5s";
  document.getElementById("navbar").style.right= "0px";
  document.body.style.overflow = 'hidden';
  document.getElementById("navbar").style.boxShadow = "0 0 0 10000px rgba(0,0,0,.50)";
});
let crossicons = document.getElementById("crossicon");
crossicons.addEventListener("click", function () {
  document.getElementById("navbar").style.right = "-100%";
  document.getElementById("navbar").style.transition = "0.9s";
  document.body.style.overflow = 'scroll';
  document.getElementById("navbar").style.boxShadow = "0 0 0 0px rgba(0,0,0,0)";
});

window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("header");

function myFunction() {
  if (window.pageYOffset >= 170) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
