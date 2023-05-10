let menuicons = document.getElementById("navbaricon");
menuicons.addEventListener("click", function () {
  document.getElementById("navbar").style.transition = "0.5s";
  document.getElementById("navbar").style.right= "0px";
  document.body.style.overflow = 'hidden';
});
let crossicons = document.getElementById("crossicon");
crossicons.addEventListener("click", function () {
  document.getElementById("navbar").style.right = "-100%";
  document.getElementById("navbar").style.transition = "0.9s";
  document.body.style.overflow = 'scroll';
});

window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("header");

function myFunction() {
  if (window.pageYOffset >= 170) {
    header.classList.add("sticky");
    document.getElementById("navbar").style.top= "70px";
  } else {
    header.classList.remove("sticky");
    document.getElementById("navbar").style.top= "100px";
  }
}
