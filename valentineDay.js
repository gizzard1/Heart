
var heart = document.querySelector('.heart'),
    heartButton = document.querySelector('.heartButton'),
    heartButton2 = document.querySelector('.heartButton2'),
    reload = document.querySelector('.reload'),
    hearts = document.querySelector('.hearts'),
    allHearts = document.querySelectorAll('.hearts div'),
   heartAnime = document.querySelector('.heart.anime')
    

heart.addEventListener('click', animation);

reload.addEventListener('click', refresh)


function animation() {
   heart.classList.add("active");
   heartButton.setAttribute("style", "opacity: 1; cursor: pointer; pointer-events: auto;  ");
   heartButton2.setAttribute("style", "opacity: 1; cursor: pointer; pointer-events: auto;  ");
   reload.setAttribute("style", "opacity: 1; cursor: pointer; pointer-events: auto;  ");
   heartAnime.style.opacity = "0";

   allHearts.forEach(function(element) {
      element.classList.add("active");
   })
}

function refresh() {
  heart.classList.remove("active");
  heartButton.classList.remove("active");
      reload.setAttribute("style", "opacity: 0; pointer-events: none;");
      heartButton.setAttribute("style", "opacity: 0; pointer-events: none;  ");
      heartButton2.setAttribute("style", "opacity: 0; pointer-events: none;  ");
   heartAnime.style.opacity = "1";
   allHearts.forEach(function(element) {
      element.classList.remove("active");
   })
   
   var mensajeElemento = document.getElementById("mensaje");
   mensajeElemento.innerHTML = "Mi amor...<br>Estuve preparando esto para ti<br>porque me haces sentir inmensamente feliz y seguro. <br>Probablemente hoy no nos veamos, pero en cuanto te mire</br>mis ganas de abrazarte se dispararan <br> <br> Acepta ser mi novia y te doy mil besos :3";
}

function cambiarTexto() {
   heartButton.setAttribute("style", "opacity: 0; pointer-events: none;  ");
   heartButton2.setAttribute("style", "opacity: 0; pointer-events: none;  ");
   var mensajeElemento = document.getElementById("mensaje");
   mensajeElemento.innerHTML = "Wuuuuuuuuuuuuuuuu<br>Elegiste bien. Después te pago tus besos uwu<br>Te amo, corazón<br></br>12/02/2024<br><br>:3";
 }
