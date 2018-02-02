/**
 * Created by Lenovo on 06/01/2018.
 */
var placeApp = angular.module('routerApp.place', [])
    .controller('placeController', placeController);
placeController.$inject = ['$location','$window', '$rootScope', '$scope', 'placeService', 'mapService'];

function placeController($location,$window, $rootScope, $scope, placeService, mapService) {
    $rootScope.title = "Places";
    $rootScope.subMenu = "place";

    $scope.viewList = true;
    var places = placeService.getAllPlaces();
    places.then(function (response) {
            $scope.places = response;
            console.log(response)
        },
        function (reason) {

        });
    $scope.addPlace = function () {
        $scope.viewList = false;
        mapService.init();
    };

    $scope.placeSource = {};
    $scope.placeDestination = {};

    $scope.searchSource = function () {
        alert($scope.searchPlaceSource);
        search($scope.searchPlaceSource, 'source');
    }

    function search(searchPlace, dir) {
        $scope.apiError = false;
        mapService.search(searchPlace, dir)
            .then(
                function (res) { // success

                    if (dir === 'source') {
                        mapService.addMarker(res, dir);
                        $scope.placeSource.name = res.name;
                        $scope.placeSource.lat = res.geometry.location.lat();
                        $scope.placeSource.lng = res.geometry.location.lng();
                    }
                },
                function (status) { // error
                    console.log(status);
                    alert('Location not Found {}',status);
                }
            );
    }

    $scope.send = function () {
        alert($scope.placeSource.nameSource + ' : ' + $scope.placeSource.latSource + ', ' + $scope.placeSource.lngSource);
    }

    $scope.savePlace = function () {
        var place = {
            name: $scope.placeSource.name,
            code: Math.random(),
            longitude: $scope.placeSource.lng,
            latitude: $scope.placeSource.lat
        };
        console.log('Before Save Place : {}',place);
        placeService.savePlace(place).then(function (response) {
                var url = 'http://localhost:63342/FreightManagementFront/#/place';
                $location.url(url);
            },
            function (reason) {
                console.log(reason);
                alert('Location not added {}',reason);
            });
    }

}