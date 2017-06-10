/*Codigo para ubicar al usuarios */

   function carga(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(initialize, showError);
    } else {
        alert("Este navegador no soporta geolocalizacion.");
    }
}
var alerta = document.getElementById('alerta1');
var par = document.getElementById("demo");
var lon, lat;
var parr = document.getElementsByClassName('parr');
var parr1, parr0;

//Oculta ventana emergente
alerta.style.display = "none"
function showError(error) { 
alerta.style.display = "block" 
  var msg;
    switch(error.code) {
        case error.PERMISSION_DENIED:
            msg="Has negado usar tu localizacion.";
            break;
        case error.POSITION_UNAVAILABLE:
            msg="La informacion de localizacion no esta disponible. Prueba actualizando tu Navegador :/";
            break;
        case error.TIMEOUT:
            msg="La solicitud para obtener tu localizacion tardo demasiado.";
            break;
        case error.UNKNOWN_ERROR:
            msg="Ocurrio un error desconocido.";
            break;
    }
   par.innerHTML = msg;
}
  var urls = document.URL;
         var valor_select=document.getElementById('eleccion');

function boton() {
    
       if( valor_select.selectedIndex  == 1){ 
              location.href= "http://localhost:8080/ROADMAP"  
            
        } else if( valor_select.selectedIndex ==2){
           location.href= "http://localhost:8080/SATELLITE" 
          //google.maps.MapTypeId.SATELLITE;  //Satellite
        
        } else if( valor_select.selectedIndex ==3){
            location.href= "http://localhost:8080/HYBRID" 
        } else if( valor_select.selectedIndex  ==4){
            location.href= "http://localhost:8080/TERRAIN" 
           //google.maps.MapTypeId.TERRAIN; //Terrain
          
        }
    }
 document.getElementById('btn').addEventListener("click",boton)
var tipo;
 if (urls == "http://localhost:8080/ROADMAP") {
   tipo = google.maps.MapTypeId.ROADMAP;
parr1 = "En este tipo de mapa podemos ver una version subrealista con lineas que marcan las calles etc, ademas estan presentes los nombres de calles, vecindarios, ciudades etc"             
 parr0 = "ROADMAP";
 } else if ( urls == "http://localhost:8080/SATELLITE"){
   tipo = google.maps.MapTypeId.SATELLITE;  //Satellite 
    parr1 = "Este tipo de mapa es realista pero carece de indicaciones del terreno entre otras cosas aunque lo compensa por su realismo"
          parr0 = "SATELLITE";
 } else if(urls == "http://localhost:8080/HYBRID"){
    parr0 = "HYBRID";
    //google.maps.MapTypeId.HYBRID; //Hybrid
     parr1= "Como su nombre lo indica este tipo de mapa es hibrido posee el realismo de el Satellite con indicaciones, haciendolo una muy buena opcion para navegar"
   tipo = google.maps.MapTypeId.HYBRID; //Hybrid
 } else if(urls == "http://localhost:8080/TERRAIN") {
       tipo = google.maps.MapTypeId.TERRAIN; //Hybrid
        parr0 = "TERRAIN";    
           parr1  = "Este tipo de mapa es muy parecido a lo que es Roadmap pero con la diferencia de que este posee un relieve que le da un pequeño toque de realismo"
 } else {
  parr0 = "HYBRID";
    //google.maps.MapTypeId.HYBRID; //Hybrid
     parr1= "Como su nombre lo indica este tipo de mapa es hibrido posee el realismo de el Satellite con indicaciones, haciendolo una muy buena opcion para navegar"
   tipo = google.maps.MapTypeId.HYBRID; //Hybrid
 }

parr[1].innerHTML = parr1;
parr[0].innerHTML = parr0;

   function initialize(position) {
  lon =position.coords.longitude;
       lat = position.coords.latitude;
      var myCenter=new google.maps.LatLng(lat,lon);


var mapProp = {
  center:myCenter,
  zoom:10,
    mapTypeId:tipo
  };
 

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
var marker=new google.maps.Marker({
  position:myCenter,
  animation:google.maps.Animation.BOUNCE
  });

marker.setMap(map);

}
google.maps.event.addDomListener(window, 'reload', initialize);

// end
/*Codigo del mapa*/
/*----------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------*/

 function cerrar() {
    alerta.parentNode.removeChild(alerta);
 }

