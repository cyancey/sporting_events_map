window.onload = function() {
  initialize()
}

function initialize() {
  // var mapOptions = {
  //   center: new google.maps.LatLng(-34.397, 150.644),
  //   zoom: 8
  // };
  // var map = new google.maps.Map(document.getElementById("map-canvas"),
  //     mapOptions);
  map = new MapView()

}
// google.maps.event.addDomListener(window, 'load', initialize);

// function latLngMapObj(latLngObj) {
//   return new google.maps.LatLng(latLngObj.lat, latLngObj.lng)
// }

function mapMarker(latLngObj) {

}

//For testing, should do client side geocoding when searching for events
function searchLocationServerSide(locationString) {
  var ajaxRequest = $.ajax({
    url: '/location',
    type: 'GET',
    data: {location: locationString}
  })

  ajaxRequest.done(locationData)
}

function locationData(response) {
  var data = JSON.parse(response)
  console.log(data)
  y = data
}
