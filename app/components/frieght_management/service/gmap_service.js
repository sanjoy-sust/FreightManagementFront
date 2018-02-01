pathApp.factory('gMapService', gMapService);
gMapService.$inject = ['$http', '$q', '$timeout'];

function gMapService($http, $q, $timeout) {
    return {
        mapPlaceSource: null,
        mapPlaceDestination: null,
        mapSource: null,
        mapDest: null,
        markerSource : null,
        markerDest : null,
        init: function init() {

            var latlng = new google.maps.LatLng(39.305, -76.617);
            mapSource = new google.maps.Map(document.getElementById('mapSource'), {
                center: latlng,
                zoom: 12
            });
            var placesSource = new google.maps.places.PlacesService(mapSource);


            mapDest = new google.maps.Map(document.getElementById('mapDestination'), {
                center: latlng,
                zoom: 12
            });
            var placesDestination = new google.maps.places.PlacesService(mapDest);
            if (!this.mapPlaceSource) {
                this.mapPlaceSource = placesSource;
            }
            if (!this.mapPlaceDestination) {
                this.mapPlaceDestination = placesDestination;
            }
        },
        search: function search(str, dir) {
            var d = $q.defer();
            if (dir === 'source') {
                this.mapPlaceSource.textSearch({query: str}, function (results, status) {
                    if (status == 'OK') {
                        d.resolve(results[0]);
                    }
                    else d.reject(status);
                });
            }if (dir === 'destination') {
                this.mapPlaceDestination.textSearch({query: str}, function (results, status) {
                    if (status == 'OK') {
                        d.resolve(results[0]);
                    }
                    else d.reject(status);
                });
            }
            return d.promise;
        },
        addMarker: function addMarker(res, dir) {

            if (dir === 'source') {
                if (this.markerSource) this.markerSource.setMap(null);
                this.markerSource = new google.maps.Marker({
                    map: mapSource,
                    position: res.geometry.location,
                    animation: google.maps.Animation.DROP
                });
                mapSource.setCenter(res.geometry.location);
            }
            if (dir === 'destination') {
                if (this.markerDest) this.markerDest.setMap(null);
                this.markerDest = new google.maps.Marker({
                    map: mapDest,
                    position: res.geometry.location,
                    animation: google.maps.Animation.DROP
                });
                mapDest.setCenter(res.geometry.location);
            }
        }
    };

};