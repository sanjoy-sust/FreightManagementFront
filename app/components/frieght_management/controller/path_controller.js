/**
 * Created by Lenovo on 06/01/2018.
 */
var pathApp = angular.module('routerApp.path', [])
    .controller('pathController', pathController);
pathController.$inject = ['$window', '$scope','pathService'];

function pathController($window, $scope ,pathService) {
    var projects = pathService.getAllPaths();
    projects.then(function (response) {
            $scope.paths = response;
            console.log(response) },
        function (reason) {

        })
}