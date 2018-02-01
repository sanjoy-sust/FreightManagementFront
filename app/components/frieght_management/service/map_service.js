placeApp.factory('mapService', mapService);
mapService.$inject = ['$http', '$q', '$timeout'];

function mapService($http, $q, $timeout) {
    return {
        mapPlaceSource: null,
        mapSource: null,
        markerSource : null,

        init: function init() {

            var latlng = new google.maps.LatLng(39.305, -76.617);
            mapSource = new google.maps.Map(document.getElementById('mapSource'), {
                center: latlng,
                zoom: 12
            });
            var placesSource = new google.maps.places.PlacesService(mapSource);


            if (!this.mapPlaceSource) {
                this.mapPlaceSource = placesSource;
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
        }
    };

};