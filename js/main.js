//AIzaSyDqry5zBfs6ozcwscoBboG_Czm4GTeDpCw

const Ubicacion = {
  item: {
    map: undefined,
    latitud: undefined,
    longitud: undefined
  },

initMap: function () {
    Ubicacion.item.map = new google.maps.Map($('#map')[0], {
    zoom: 5,
    center: {lat: -9.1191427, lng: -77.0349046},
    mapTypeControl:false,
    zoomControl: false,
    streetViewControl:false
    });
    Ubicacion.encuentrame();
  },


  buscar: function () {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(Ubicacion.funcionExito, Ubicacion.funcionError);
    }
  },

  encuentrame: function(){
    $("#encuentrame").click(Ubicacion.buscar);
  },

  funcionExito: function(posicion){
    Ubicacion.item.latitud=posicion.coords.latitude;
    Ubicacion.item.longitud=posicion.coords.longitude;

    let miUbicacion= new google.maps.Marker({
      position:{lat:Ubicacion.item.latitud,lng:Ubicacion.item.longitud},
      animation: google.maps.Animation.DROP,
      map:Ubicacion.item.map
    });
      Ubicacion.item.map.setZoom(17);
      Ubicacion.item.map.setCenter(miUbicacion.position);
  },

  funcionError: function(error){
    alert("Tenemos un problema para encontrar tu ubicación");
  }
}
$(document).ready(Ubicacion.initMap);
