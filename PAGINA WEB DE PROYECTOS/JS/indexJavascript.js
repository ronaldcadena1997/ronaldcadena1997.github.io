"use strict";
let cadena= "fas fa-cannabis logoFlor";

const logoId = document.getElementById("logoId")
const cargarPantalla = document.getElementById('cargarPanta');
const textoCargaId = document.getElementById('cargasId');
const imagen1Presen = document.getElementById('img2Presen');


//parar eliminar el scroll temporarmente
document.body.classList.add("pararScroll");
logoId.removeAttribute("class");

setInterval(()=>{
    textoCargaId.textContent ="B I E N V E N I D O !!";
    textoCargaId.style.color = "green";
    textoCargaId.style.textShadow ="0px 0px 10px brown";
    cargarPantalla.style.animation = "animacionPantallaDesaparecer 1s infinite alternate";
       setInterval(()=>{  
        logoId.setAttribute("class",cadena);
        cargarPantalla.remove();     
document.body.classList.remove("pararScroll");
imagen1Presen.classList.add("imagenes2Presentacion");


       },1000);
       
 
},4000);
        
 

window.addEventListener("keydown",()=>{
     window.scrollX = 0;
     window.scrollY =0;

})