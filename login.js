let menuicons = document.getElementById('navbaricon');
menuicons.addEventListener('click' , function(){
    document.getElementById('navbar').style.transition= '0.5s'
    document.getElementById('navbar').style.visibility = 'visible'
})
let crossicons = document.getElementById('crossicon');
crossicons.addEventListener('click', function(){
    document.getElementById('navbar').style.visibility = 'hidden'
    document.getElementById('navbar').style.transition= '0.5s'
})

window.onscroll = function() {myFunction()};

var header = document.getElementById("header");

function myFunction() {
  if (window.pageYOffset >= 170) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky");
  }
}