function MapView() {
  var mapOptions = {
    center: new google.maps.LatLng(37.09024, -95.712891),
    zoom: 4
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

  mapMarker: function(latLngObj) {
    return new google.maps.Marker({
    position: this.latLngMapObj(latLngObj),
    title:"Hello World!"
    });
  },

  latLngMapObj: function(latLngObj) {
  return new google.maps.LatLng(latLngObj.lat, latLngObj.lng)
  },

  placeMarker: function(mapMarker) {
    mapMarker.setMap(this.map)
  }


}
