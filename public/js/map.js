function MapView() {
  var mapOptions = {
    center: new google.maps.LatLng(-34.397, 150.644),
    zoom: 8
  };

  this.map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  this.markers = []
}

MapView.prototype = {
  boundries: function() {
    var mapBoundries = this.map.getBounds()
    var northEast = mapBoundries.getNorthEast()
    var southWest = mapBoundries.getSouthWest()
    var northEastLatitude = northEast.k
    var northEastLongitude = northEast.A
    var southWestLatitude = southWest.k
    var southWestLongitude = southWest.A

    return {northEast: {lat: northEastLatitude,
                        lng: northEastLongitude},
            southWest: {lat: southWestLatitude,
                        lng: southWestLongitude}
            }
  },

  placeMarker: function(latLngObj) {

  }

}
