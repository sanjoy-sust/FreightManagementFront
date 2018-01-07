/**
 * Created by Lenovo on 08/01/2018.
 */
var shellApp = angular.module('routerApp.shell', [])
    .controller('shellController', shellController);
shellController.$inject = ['$window', '$scope','shellService'];

function shellController($window, $scope,shellService) {
}