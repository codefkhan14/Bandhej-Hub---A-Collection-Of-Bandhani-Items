
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
