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

    $scope.place = {};
    $scope.search = function(searchPlace) {
        $scope.apiError = false;
        mapService.search(searchPlace)
            .then(
                function(res) { // success
                    mapService.addMarker(res);
                    $scope.place.name = res.name;
                    $scope.place.lat = res.geometry.location.lat();
                    $scope.place.lng = res.geometry.location.lng();
                },
                function(status) { // error
                    $scope.apiError = true;
                    $scope.apiStatus = status;
                }
            );
    }

    $scope.send = function() {
        alert($scope.place.name + ' : ' + $scope.place.lat + ', ' + $scope.place.lng);
    }

}