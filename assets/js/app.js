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
var seccSegundo=document.createElement("section");
seccSegundo.setAttribute("id","imagenes1");
var div04=document.createElement("div");
var coder04=document.createElement("img");
coder04.setAttribute("src","assets/img/14.png");
var div05=document.createElement("div");
var coder05=document.createElement("img");
coder05.setAttribute("src","assets/img/15.png");
var div06=document.createElement("div");
var coder06=document.createElement("img");
coder06.setAttribute("src","assets/img/16.png");

/******************************************************/
seccPrimero.appendChild(div01);
seccPrimero.appendChild(div02);
seccPrimero.appendChild(div03);
seccEncabezado.appendChild(parrafo);
seccEncabezado.appendChild(barra);
document.body.appendChild(seccEncabezado);
document.body.appendChild(seccPrimero);
var seccSegundo=document.createElement("section");


div04.appendChild(coder04);
div05.appendChild(coder05);
div06.appendChild(coder06);
seccSegundo.appendChild(div04);
seccSegundo.appendChild(div05);
seccSegundo.appendChild(div06);
document.body.appendChild(seccSegundo);
