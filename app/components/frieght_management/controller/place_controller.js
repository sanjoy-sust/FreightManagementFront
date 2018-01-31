/**
 * Created by Lenovo on 06/01/2018.
 */
var placeApp = angular.module('routerApp.place', [])
    .controller('placeController', placeController);
placeController.$inject = ['$window','$rootScope', '$scope','placeService','mapService'];

function placeController($window,$rootScope, $scope ,placeService,mapService) {
    $rootScope.title = "Places";
    $rootScope.subMenu = "place";

    $scope.viewList = true;
    var places = placeService.getAllPlaces();
    places.then(function (response) {
            $scope.places = response;
            console.log(response) },
        function (reason) {

        });
    $scope.addPlace = function () {
        $scope.viewList = false;
        mapService.init();
    };

    $scope.placeSource = {};
    $scope.placeDestination = {};

    $scope.searchSource = function (searchPlace) {
        search(searchPlace,'source');
    }

    $scope.searchDestination = function (searchPlace) {
       search(searchPlace,'destination');
    }

    function search(searchPlace,dir) {
        $scope.apiError = false;
        mapService.search(searchPlace,dir)
            .then(
                function(res) { // success

                    if(dir === 'source'){
                        mapService.addMarker(res,dir);
                        $scope.placeSource.name = res.name;
                        $scope.placeSource.lat = res.geometry.location.lat();
                        $scope.placeSource.lng = res.geometry.location.lng();
                    }
                    if(dir === 'destination'){
                        mapService.addMarker(res,dir);
                        $scope.placeDestination.name = res.name;
                        $scope.placeDestination.lat = res.geometry.location.lat();
                        $scope.placeDestination.lng = res.geometry.location.lng();
                    }

                },
                function(status) { // error
                    $scope.apiError = true;
                    $scope.apiStatus = status;
                }
            );
    }

    $scope.send = function() {
        alert($scope.placeSource.nameSource + ' : ' + $scope.placeSource.latSource + ', ' + $scope.placeSource.lngSource);
    }

}