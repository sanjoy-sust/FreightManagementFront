var pathApp = angular.module('routerApp.path', [])
    .controller('pathController', pathController);
pathController.$inject = ['$window', '$rootScope', '$scope', 'pathService', 'gMapService'];

function pathController($window, $rootScope, $scope, pathService, gMapService) {
    $rootScope.title = "Paths";
    $rootScope.subMenu = "path";
    $scope.viewList = true;
    $scope.routeTypes = ["Road", "Ocean", "Rail"];
    $scope.containerSizes = ["20", "40"];
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

    $scope.searchSource = function () {
        alert($scope.searchPlaceSource);
        search($scope.searchPlaceSource, 'source');
    }

    $scope.searchDestination = function () {
        search($scope.searchPlaceDestination, 'destination');
    }

    function search(searchPlace, dir) {
        $scope.apiError = false;
        gMapService.search(searchPlace, dir)
            .then(
                function (res) { // success

                    if (dir === 'source') {
                        gMapService.addMarker(res, dir);
                        $scope.placeSource.name = res.name;
                        $scope.placeSource.lat = res.geometry.location.lat();
                        $scope.placeSource.lng = res.geometry.location.lng();
                    }
                    if (dir === 'destination') {
                        gMapService.addMarker(res, dir);
                        $scope.placeDestination.name = res.name;
                        $scope.placeDestination.lat = res.geometry.location.lat();
                        $scope.placeDestination.lng = res.geometry.location.lng();
                    }

                },
                function (status) { // error
                    $scope.apiError = true;
                    $scope.apiStatus = status;
                }
            );
    }

    $scope.send = function () {
        alert($scope.placeSource.nameSource + ' : ' + $scope.placeSource.latSource + ', ' + $scope.placeSource.lngSource);
    };

    $scope.savePath = function () {
        var path = {
            from: $scope.placeSource.name,
            to: $scope.placeDestination.name,
            cost: $scope.cost,
            containerSize: $scope.containerSize,
            routeType: $scope.routeType,
            duration: $scope.duration
        }
        pathService.savePath(path).then(function (value) {
          alert("Path Added {}",value);
        },function (reason) {
            alert("Path Not Added {}",reason);
        });
    }
}