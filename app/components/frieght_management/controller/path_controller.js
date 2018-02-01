/**
 * Created by Lenovo on 06/01/2018.
 */
var pathApp = angular.module('routerApp.path', [])
    .controller('pathController', pathController);
pathController.$inject = ['$window', '$rootScope', '$scope', 'pathService','gMapService'];

function pathController($window, $rootScope, $scope, pathService,gMapService) {
    $rootScope.title = "Paths";
    $rootScope.subMenu = "path";
    $scope.viewList = true;
    var paths = pathService.getAllPaths();
    paths.then(function (response) {
            $scope.paths = response;
            console.log($scope.paths)
        },
        function (reason) {

        });
    $scope.addPath = function () {
        $scope.viewList = false;
        gMapService.init();
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
        gMapService.search(searchPlace,dir)
            .then(
                function(res) { // success

                    if(dir === 'source'){
                        gMapService.addMarker(res,dir);
                        $scope.placeSource.name = res.name;
                        $scope.placeSource.lat = res.geometry.location.lat();
                        $scope.placeSource.lng = res.geometry.location.lng();
                    }
                    if(dir === 'destination'){
                        gMapService.addMarker(res,dir);
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