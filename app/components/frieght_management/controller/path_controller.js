/**
 * Created by Lenovo on 06/01/2018.
 */
var pathApp = angular.module('routerApp.path', [])
    .controller('pathController', pathController);
pathController.$inject = ['$window','$rootScope', '$scope','pathService'];

function pathController($window,$rootScope, $scope ,pathService) {
    $rootScope.title = "Paths";
    $rootScope.subMenu = "path";
    var paths = pathService.getAllPaths();
    paths.then(function (response) {
            $scope.paths = response;
            console.log(response) },
        function (reason) {

        })
}