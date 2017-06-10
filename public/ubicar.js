var video = document.getElementById('videoYou');
var idioma_navegador = navigator.language;
var lopais = document.getElementsByClassName('paisS')[0];
var uvideo;



if(idioma_navegador == "es-ar"){
pais = "Argentina";
uvideo = "https://www.youtube.com/embed/xFutjZEBTXs"
}else if(idioma_navegador == "en-au"){
pais = "Australia"
uvideo =  "https://www.youtube.com/embed/GQBcrPWRVf8"
}else if(idioma_navegador == "de-at"){
pais = "Austria";
uvideo ="https://www.youtube.com/embed/GQBcrPWRVf8"
}else if(idioma_navegador == "nl-be"){
pais = "Belgium";
uvideo = "https://www.youtube.com/embed/ru0K8uYEZWw"
}else if(idioma_navegador == "pt-br"){
pais = "Brazil";
uvideo = "https://www.youtube.com/embed/EWcOY14GWwM"
}else if(idioma_navegador =="en-ca"){
pais = "Canada";
uvideo ="https://www.youtube.com/embed/GQBcrPWRVf8"
}else if(idioma_navegador == "es-cl"){
pais = "Chile";
uvideo ="https://www.youtube.com/embed/GQBcrPWRVf8"
}else if(idioma_navegador == "es-co"){
pais = "Colombia";
uvideo = "https://www.youtube.com/embed/lzGA9ma3u9M"
}else if(idioma_navegador== "es-cr"){ 
pais = "Costa Rica";
uvideo ="https://www.youtube.com/embed/GQBcrPWRVf8"
}else if(idioma_navegador== "cs"){ 
pais = "Czech tepublica";
uvideo =""
}else if(idioma_navegador== "en-US"){ 
pais ="Estados Unidos"
uvideo ="https://www.youtube.com/embed/GQBcrPWRVf8"
}else if(idioma_navegador== "es-sv"){ 
pais = "salvador";
uvideo ="https://www.youtube.com/embed/nYh-n7EOtMA"
}else if(idioma_navegador == "es-DO"){
 pais = "Rep. Dominicana"
 uvideo ="https://www.youtube.com/embed/0GvLP2C2w9U"
}else if(idioma_navegador == "es-ec"){
 pais = "Ecuador"
 uvideo ="https://www.youtube.com/embed/AMTAQ-AJS4Y" 
} else if(idioma_navegador == "fr-fr"){
 pais = "Francia"
 uvideo ="https://www.youtube.com/embed/GQBcrPWRVf8"
}else if(idioma_navegador == "de-de"){
 pais = "Germany"
 uvideo ="https://www.youtube.com/embed/GQBcrPWRVf8"
}else { 
pais = "Otro";
uvideo =  "https://www.youtube.com/embed/GQBcrPWRVf8"
}

// Se seguiran añadiendo mas paises y mejorar el algoritmo, este no es muy exacto

lopais.innerHTML = "Pais: " + pais;
video.src = uvideo;
