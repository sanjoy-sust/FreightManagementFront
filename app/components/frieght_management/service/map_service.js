placeApp.factory('mapService', mapService);
mapService.$inject = ['$http', '$q', '$timeout'];

function mapService($http, $q, $timeout) {
    var map = null;
    var places = null;
    var marker = null;
    return {
        mapPlace : null,
        init: function init() {

            var latlng = new google.maps.LatLng(39.305, -76.617);
            map = new google.maps.Map(document.getElementById('map'), {
                center: latlng,
                zoom: 12
            });
            places = new google.maps.places.PlacesService(map);
            if (!this.mapPlace) {
                this.mapPlace = places;
            }
        },
        search:   function search(str) {
            var d = $q.defer();
            this.mapPlace.textSearch({query: str}, function (results, status) {
                if (status == 'OK') {
                    d.resolve(results[0]);
                }
                else d.reject(status);
            });
            return d.promise;
        } ,
        addMarker:   function addMarker(res) {
            if (marker) marker.setMap(null);
            marker = new google.maps.Marker({
                map: map,
                position: res.geometry.location,
                animation: google.maps.Animation.DROP
            });
            map.setCenter(res.geometry.location);
        }
    };

};