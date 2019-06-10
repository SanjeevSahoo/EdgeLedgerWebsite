var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 23.206010, lng: 84.408286},
    zoom: 8
  });
}