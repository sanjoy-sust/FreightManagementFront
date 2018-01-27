/**
 * Created by Lenovo on 06/01/2018.
 */
var placeApp = angular.module('routerApp.place', [])
    .controller('placeController', placeController);
placeController.$inject = ['$window','$rootScope', '$scope','placeService'];

function placeController($window,$rootScope, $scope ,placeService) {
    $rootScope.title = "Places";
    $rootScope.subMenu = "place";
    $scope.view = "app/components/frieght_management/templates/place/place_list.html";
    var places = placeService.getAllPlaces();
    places.then(function (response) {
            $scope.places = response;
            console.log(response) },
        function (reason) {

        });
    $scope.addPlace = function () {
        $scope.view = "app/components/frieght_management/templates/place/place_add.html";
    }
}