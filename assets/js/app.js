var seccEncabezado=document.createElement("section");
seccEncabezado.setAttribute("id","cabeza")
var parrafo=document.createElement("p");
parrafo.setAttribute("id","myParrafo");
parrafo.innerHTML="nuestras coders";
var barra=document.createElement("hr");
var seccPrimero=document.createElement("section");
seccPrimero.setAttribute("id","imagenes");
var div01=document.createElement("div");
var coder01=document.createElement("img");
coder01.setAttribute("src","assets/img/11.png");
var div02=document.createElement("div");
var coder02=document.createElement("img");
coder02.setAttribute("src","assets/img/12.png");
var div03=document.createElement("div");
var coder03=document.createElement("img");
coder03.setAttribute("src","assets/img/13.png");
div01.appendChild(coder01);
div02.appendChild(coder02);
div03.appendChild(coder03);
/*****************************************************/


/******************************************************/
seccPrimero.appendChild(div01);
seccPrimero.appendChild(div02);
seccPrimero.appendChild(div03);
seccEncabezado.appendChild(parrafo);
seccEncabezado.appendChild(barra);
document.body.appendChild(seccEncabezado);
document.body.appendChild(seccPrimero);
var seccSegundo=document.createElement("section");
